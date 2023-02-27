import { faker } from '@faker-js/faker';

export class Company {
    constructor() {
      this._id = faker.datatype.uuid();
      this.name = faker.company.name();
      this.address = {
          street: faker.address.street(),
          city: faker.address.city(),
          state: faker.address.state(),
          zipCode: faker.address.zipCode(),
          country: faker.address.country()
    }
  }
}

console.log(new Company)
