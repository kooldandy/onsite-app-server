import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { AccessService } from './access.service';
import { CreateUserDto, AccessUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
//import { UpdateAccessDto } from './dto/update-access.dto';

@Controller()
export class AccessController {
  constructor(private readonly accessService: AccessService) {}

  @Post('api/signup')
  signup(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.accessService.create(createUserDto);
  }

  @Post('api/signin')
  login(@Body() accessUserDto: AccessUserDto): Promise<User> {
    return this.accessService.getAuth(accessUserDto.id, accessUserDto.password);
  }

  // @Get()
  // findAll() {
  //   return this.accessService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.accessService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAccessDto: UpdateAccessDto) {
  //   return this.accessService.update(+id, updateAccessDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.accessService.remove(+id);
  // }
}
