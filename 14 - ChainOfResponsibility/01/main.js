const courses = require('./courses');
const Finder = require('./Finder');

const udemyFinder = new Finder('Finder Udemy', courses.language);
let searQuery = 'F1 studio';
const result = udemyFinder.find(searQuery);

console.log(result);
