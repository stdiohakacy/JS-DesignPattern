const {Course, CourseServicesFadace} = require('./Course');

const course = new Course({
    name: 'JS Design Pattern',
    project: 'My project'
});

console.log(course);

CourseServicesFadace.CompletedMethod(course);

console.log(course);
