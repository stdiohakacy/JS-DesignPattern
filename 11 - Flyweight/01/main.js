const {CourseMethods} = require('./Course');

const users = ['Alex', 'Paul', 'John', 'Julia'];
const completed = [true, false];

const courses = new CourseMethods();

const numCourses = 1000000;
const initialMemory = process.memoryUsage().heapUsed;

for (let i = 0; i < numCourses; i++) {
    courses.add({
        title: `${i} .course`,
        user: users[Math.floor((Math.random() * 4))],
        completed: completed[Math.floor((Math.random() * 2))]
    });
}

const finalMemory = process.memoryUsage().heapUsed;
const usedMemory = ((finalMemory - initialMemory) / 1000000).toFixed(2);
console.log(`used memory : ${usedMemory} MB`);
