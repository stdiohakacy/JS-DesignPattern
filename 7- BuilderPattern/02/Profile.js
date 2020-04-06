class Profile {
    constructor(builder) {
        this.menuLocation = builder.menuLocation;
        this.borders = builder.borders;
        this.theme = builder.theme;
        this.coverImg = builder.coverImg;
        this.backgroundColor = builder.backgroundColor;
        this.menuColor = builder.menuColor;
        this.profileFont = builder.profileFont;
    }

    toString() {
        return JSON.stringify(this);
    }
}

module.exports = Profile;
