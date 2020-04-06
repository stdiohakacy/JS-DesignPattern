const Course = require('./Course');

class CourseBuilder {
    constructor(name, sales = 0, price = 0) {
        this.name = name;
        this.sales = sales;
        this.price = price;
    }

    makePaid(price) {
        this.isFree = false;
        this.price = price;
        return this;
    }

    makeCampain() {
        this.isCampain = true;
        return this;
    }

    build() {
        return new Course(this);
    }
}

class HotAndNew {
    constructor(baseCourse) {
        this.name = `${baseCourse.name} is hot and new`;
    }
}

class BestSeller {
    constructor(baseCourse) {
        this.name = `${baseCourse.name} is best seller`;
    }
}

module.exports = {HotAndNew, BestSeller, CourseBuilder};
