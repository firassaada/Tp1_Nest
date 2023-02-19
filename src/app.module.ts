import { Module,Global } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './todo/CommonModule';
import { TodoModule } from './todo/ToDo.module';

@Module({
  imports: [TodoModule,CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

