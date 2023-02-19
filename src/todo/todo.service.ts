import { Inject, Injectable } from '@nestjs/common';
import { CommonModule } from './CommonModule';
import { todomodel, TodoStatusEnum } from './todo.model';



@Injectable()
export class todoservice 
{
    constructor(
        @Inject("Uuid") private uuid 
    ) {
        
    }
    addtodo(todos, body): todomodel {
        let todo    = new todomodel()
        todo.id     = this.uuid() ;
        todo.name   = body.name
        todo.description = body.description
        todo.statut = TodoStatusEnum.waiting
        todo.date_de_creation = Date.now();
        todos.push(todo)
        return todo
    }
    getbyid(todos, id): todomodel {
        return todos.find(x => x.id==id)
    }
    deletebyid(todos, id): todomodel {
        const index=todos.find(x=> x.id==id) 
        todos.splice(index,1) 
        return index 
    }
    modifybyid(todos,id,body) : todomodel {
        let todo=todos.find(x=> x.id==id)
        todo.name = body.name
        todo.description=body.description
        todo.status=body.status
        return todo
    }
    getTodos(todos) : todomodel[] {
        return todos ;
    }
}
