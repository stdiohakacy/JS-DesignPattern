const arrOfCourses = [
    {
        id: 1,
        name: 'html'
    },
    {
        id: 2,
        name: 'js'
    },
    {
        id: 3,
        name: 'css'
    }
];

const courseName = arrOfCourses.find(course => course.name === 'js');

console.log(courseName);
