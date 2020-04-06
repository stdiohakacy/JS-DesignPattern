// ES6 Syntax
class Course {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    toString() {
        return console.log(`${this.title} ... Author : ${this.author}`);
    }
}

const course = new Course('test test', 'Duy Nguyen');
course.toString();
