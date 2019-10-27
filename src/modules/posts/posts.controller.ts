import { Controller, Get, Req, Post, Body } from '@nestjs/common';
import { DemoService } from './providers/demo/demo.service';
import { CreatePostDto } from './post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly demoService: DemoService) {}

  @Get()
  index() {
    return this.demoService.findAll();
  }

  @Post()
  store(@Body() post: CreatePostDto) {
    this.demoService.create(post);
  }
}
