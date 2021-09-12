export class CreateUserDto {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
}

export class AccessUserDto {
  id: string;
  password: string;
}
