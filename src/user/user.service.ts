import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
@Injectable()
export class UserService {
  banco: CreateUserDto[] = [];

  createUser(data: CreateUserDto): CreateUserDto[] {
    //   inserindo os dados q estão dentro do meu banco
    this.banco.push(data);
    // retornando os ados para o usuario vê
    return this.banco;
  }
  getUsers(): CreateUserDto[] {
    //o GET é o cara que vai no banco ,pega os dados e devolve. O tipo do retorno é  createUserDto
    return this.banco;
  }
}
