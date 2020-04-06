class Door {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }

    toString() {
        return `width : ${this.getWidth()} - height : ${this.getHeight()}`;
    }
}

module.exports = Door;
