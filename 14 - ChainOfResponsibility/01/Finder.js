class Finder {
    constructor(name, courses = []) {
        this.name = name;
        this.courses = courses;
    }

    find(itemName) {
        const idx = this.courses.map(item => item.name).indexOf(itemName);
        return this.courses[idx];
    }
}

module.exports = Finder;
