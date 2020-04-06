const FlyweightFactory = require('./Flyweight');

class Course {
    constructor(data) {
        this.flyWeight = FlyweightFactory.get(data.user, data.completed);
        this.title = data.title;
        // this.user = data.user;
        // this.completed = data.completed;
    }
}

const CourseMethods = function() {
    const courses = {};
    let count = 0;

    const add = (data) => {
        courses[data.title] = new Course(data);
        count++;
    };

    const get = (title) => {
        return courses[title];
    };

    const getCount = () => {
        return count;
    };

    return {
        add,
        get,
        getCount
    };
};

module.exports = {Course, CourseMethods};
