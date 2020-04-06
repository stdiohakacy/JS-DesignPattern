// const courses = ['js', 'html', 'css', 'bootstrap'];

const arrOfCourse = [
    {
        id: 1,
        name: 'js'
    },
    {
        id: 2,
        name: 'html'
    },
    {
        id: 3,
        name: 'css'
    }
];

const courseName = arrOfCourse.filter(course => course.name === 'css');
console.log(courseName);
