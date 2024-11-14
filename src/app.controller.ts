import { Controller, Get, Redirect } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Redirect('https://plug-analytics-backend.onrender.com/graphql', 302)
  getGraphQLRedirect() {}
}
