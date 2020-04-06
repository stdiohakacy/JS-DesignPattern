class CourseGroup {
    constructor(title, composite = []) {
        this.title = title;
        this.composite = composite;
    }

    /**
     * @return {int} - total cost of course group
     */
    total() {
        return this.composite.reduce((result, nextItem) => result + nextItem.total(), 0);
    }

    print() {
        console.log(`\n ****************${this.title}**************** \n`);
        this.composite.forEach(element => element.print());
        console.log(`\n ******************************** \n`);
    }
}

module.exports = CourseGroup;
