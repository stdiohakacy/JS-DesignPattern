const Course = require('./Course');
const CourseGroup = require('./CourseGroup');

const jsCourse = new Course('JS Course', 15);
const bootstrapCourse = new Course('Bootstrap Course', 10);
const photoshopCourse = new Course('Photoshop Course', 120);

const designCourse = new CourseGroup('Design Course', [bootstrapCourse, photoshopCourse]);
const webCourse = new CourseGroup('Web course', [jsCourse, bootstrapCourse]);


designCourse.print();
console.log(`Total cost : ${designCourse.total()}`);
webCourse.print();
console.log(`Total cost : ${webCourse.total()}`);
