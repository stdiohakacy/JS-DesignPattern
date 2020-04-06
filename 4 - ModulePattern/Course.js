const CourseDB = require('./CourseDB');

class Course {
    /**
     * @param {Object} data
     */
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.author = data.author;
    }

    DbRequest() {
        CourseDB.dbInfo(this);
    }
}

module.exports = Course;
