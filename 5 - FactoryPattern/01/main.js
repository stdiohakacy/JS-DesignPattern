const UserFactory = require('./UserFactory');

const duy = UserFactory('student', 'john', 'Beginner');
const john = UserFactory('instructor', 'paul', 'SE', 1000);

console.log(duy.toString());
console.log(john.toString());
