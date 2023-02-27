import { faker } from '@faker-js/faker';

export class User {
    constructor() {
      this._id = faker.datatype.uuid();
      this.firstName = faker.name.firstName();
      this.lastName = faker.name.lastName();
      this.phone = faker.phone.number();
      this.email = faker.internet.email();
      this.password = faker.internet.password();
    }
  }

console.log(new User());
      
  