// Note: Generating Fake User Data Using Faker

// Faker is a JavaScript library used to create realistic fake data for testing databases, APIs, or applications.
// Using @faker-js/faker, we can easily generate dynamic user details such as:

// userId → unique ID

// username → random username

// email → valid-looking email

// password → random password

// avatar → profile image link

// birthdate → random date of birth

// registeredAt → random past registration date

// We define a function createRandomUser() that returns an object with all these fake values.
// This helps in seeding the database, testing user modules, and simulating real-world data.

// Faker to generate fake data
//  userid, username , email , password 

//   web link   just check out:-  https://www.npmjs.com/package/@faker-js/faker
// first line : npm install @faker-js/faker

const { faker } = require('@faker-js/faker');

const createRandomUser = () => ({
  userId: faker.string.uuid(),
  username: faker.internet.username(),
  email: faker.internet.email(),
  avatar: faker.image.avatar(),
  password: faker.internet.password(),
  birthdate: faker.date.birthdate(),
  registeredAt: faker.date.past(),
});

console.log(createRandomUser());
