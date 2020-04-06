const CourseDB = () => {
    return {
        dbInfo: (course) => {
            console.log(`Course id : ${course.id} - Title: ${course.title} - Author : ${course.author}`);
        }
    };
};

module.exports = CourseDB();
