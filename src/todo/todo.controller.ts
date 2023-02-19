import { Body, Controller, Delete, Get,Inject,Param,Post, Put } from    '@nestjs/common';
import { todomodel, TodoStatusEnum } from './todo.model';
import { todoservice } from './todo.service';


export class AddTodoDto {
    name: string
    description: string
}

export class UpdateTodoDto {
    name: string
    description: string
    status: TodoStatusEnum
}


@Controller('todo')
export class TodoController {
  
    constructor(private service:todoservice) {
        this.service = service
    }
    private todos = [];
    @Get()
    getTodos() {
        return this.service.getTodos(this.todos) ;
    }
    @Post()
    addtodo(@Body() body:AddTodoDto) {
        return this.service.addtodo(this.todos, body)
    }
    @Get("/:id") 
    getbyid(@Param("id") id) {
        return this.service.getbyid(this.todos, id)
    }
    @Delete("/:id")
    deletebyid(@Param("id") id) {
        return this.service.deletebyid(this.todos, id)
    }
    @Put("/:id")
    modifybyid(@Param("id") id, @Body() body:UpdateTodoDto) {
      return this.service.modifybyid(this.todos,id,body)
    }
}
