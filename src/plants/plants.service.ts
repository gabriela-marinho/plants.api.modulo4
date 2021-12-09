import { Injectable } from '@nestjs/common';

@Injectable()
export class PlantsService {
  banco = [];

  createPlant(data) {
    this.banco.push(data);
    return this.banco;
  }
}
