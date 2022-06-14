import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
//import { UserService } from './user.service';
import { PostService } from './post.service';
import { User as UserModel, Post as PostModel } from '@prisma/client';

@Controller()
export class AppController {
  constructor(
    //private readonly userService: UserService,
    private readonly postService: PostService,
  ) {}

  @Post('post')
  async createPost(
    @Body() postData: { title: string; content?: string },
  ): Promise<PostModel> {
    return this.postService.createPost(postData);
  }

  @Get('get')
  async getPost(): Promise<PostModel[]> {
    return this.postService.posts();
  }

  @Get('get/:id')
  async getPostById(@Param('id') id: string): Promise<PostModel> {
    return this.postService.post({ id: Number(id) });
  }

  // @Get('filtered-posts/:searchString')
  // async getFilteredPosts(
  //   @Param('searchString') searchString: string,
  // ): Promise<PostModel[]> {
  //   return this.postService.posts({
  //     where: {
  //       OR: [
  //         {
  //           title: { contains: searchString },
  //         },
  //         {
  //           content: { contains: searchString },
  //         },
  //       ],
  //     },
  //   });
  // }

  // @Post('user')
  // async signupUser(
  //   @Body() userData: { name?: string; email: string },
  // ): Promise<UserModel> {
  //   return this.userService.createUser(userData);
  // }

  @Put('put/:id')
  async publishPost(
    @Param('id') id: string,
    @Body() postData: { title: string; content?: string },
  ): Promise<PostModel> {
    return this.postService.updatePost({
      where: { id: Number(id) },
      data: postData,
    });
  }

  @Delete('delete/:id')
  async deletePost(@Param('id') id: string): Promise<PostModel> {
    return this.postService.deletePost({ id: Number(id) });
  }
}
