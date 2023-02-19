import { Module,Global } from '@nestjs/common';

import { TodoController } from './ToDo.controller';
import { todoservice } from './todo.service';

@Module({
  imports: [],
  controllers: [TodoController],
  providers: [todoservice],
})
export class TodoModule {}

