const { faker } = require('@faker-js/faker');

function generateUser() {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = `${firstName}@gmail.com`;
  const phone = faker.phone
    .number()
    .replaceAll('-', '')
    .replaceAll('(', '')
    .replaceAll(')', '');
  const DOB = new Date(faker.date.birthdate()).toString();
  const address = faker.location.streetAddress();
  const letter = faker.string.alpha();
  const gender = faker.number.int({ min: 1, max: 3 });
  const state = faker.number.int({ min: 0, max: 4 });
  return {
    firstName,
    lastName,
    email,
    phone,
    DOB,
    address,
    letter,
    gender,
    state
  };
}

module.exports = { generateUser };
