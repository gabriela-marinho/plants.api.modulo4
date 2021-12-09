import { Body, Controller,Post } from '@nestjs/common';
import { PlantsService } from './plants.service';
@Controller('plants')
export class PlantsController {
  constructor(private service: PlantsService) {}
  
  @Post('create')
  createPlant(@Body() data) {
    return this.service.createPlant(data);
  }
}
