const courses = ['js', 'html', 'css', 'bootstrap'];

const numbers = [2, 6, 8];

const courseName = courses.map(course => course.length > 5);
const result = numbers.map(number => number / 2);

console.log(courseName);
console.log(result);
