import { Module,Global } from '@nestjs/common';
import { v4 as uuid4 } from 'uuid';
import { todoservice } from './todo.service';


@Global()
@Module( {
  imports: [],
  controllers: [],
  providers: [{
    provide:"Uuid",useValue : uuid4
  }],
  
  exports: [{  provide:"Uuid",useValue : uuid4}]
})
export class CommonModule {}