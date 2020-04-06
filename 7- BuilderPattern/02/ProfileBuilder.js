const Profile = require('./Profile');

class ProfileBuilder {
    setMenu(position) {
        this.menuLocation = position;
        return this;
    }

    setBorders(style) {
        this.borders = style;
        return this;
    }

    setTheme(style) {
        this.theme = style;
        return this;
    }

    setCoverImg(url) {
        this.coverImg = url;
        return this;
    }

    setBackgroundColor(color) {
        this.backgroundColor = color;
        return this;
    }

    setMenuColor(color) {
        this.menuColor = color;
        return this;
    }

    setProfileFont(fontFamily) {
        this.profileFront = fontFamily;
        return this;
    }

    build() {
        return new Profile(this);
    }
}

module.exports = ProfileBuilder;
