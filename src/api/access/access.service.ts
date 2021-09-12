import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.entity';

// @Injectable()
// export class AccessService {
//   create(createAccessDto: CreateAccessDto) {
//     return 'This action adds a new access';
//   }

//   findAll() {
//     return `This action returns all access`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} access`;
//   }

//   update(id: number, updateAccessDto: UpdateAccessDto) {
//     return `This action updates a #${id} access`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} access`;
//   }
// }

@Injectable()
export class AccessService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.password = createUserDto.password;
    user.email = createUserDto.email;

    return user.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  getAuth(id: string, password: string): Promise<User> {
    return this.userModel.findOne({
      where: {
        id,
        password,
      },
    });
  }

  findOne(id: string): Promise<User> {
    return this.userModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }
}
