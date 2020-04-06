class Course {
    constructor(data) {
        this.name = data.name;
        this.project = data.project;
        this.completed = data.completed || false;
    }
}

// IIFE function
const CourseServices = (
    () => {
        return {
            completed: (Course) => {
                Course.completed = true;
                console.log(`Completing course : ${Course.name}`);
            },
            saved: (Course) => {
                console.log(`Saving course : ${Course.name}`);
            }
        };
    }
)();

const CourseServicesFadace = (() => {
    const Complete = (course) => {
        CourseServices.completed(course);
        if (course.completed)
            CourseServices.saved(course);
    };

    return {
        CompletedMethod: Complete
    };
})();


module.exports = {Course, CourseServicesFadace};
