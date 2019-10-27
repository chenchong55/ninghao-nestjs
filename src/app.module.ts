import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsController } from './modules/posts/posts.controller';
import { DemoService } from './modules/posts/providers/demo/demo.service';
import { PostsModule } from './modules/posts/posts.module';

@Module({
  imports: [PostsModule],
  controllers: [AppController, PostsController],
  providers: [AppService, DemoService],
})
export class AppModule {}
