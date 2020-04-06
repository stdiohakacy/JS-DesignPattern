const ProfileBuilder = require('./ProfileBuilder');

const profileBuilder = new ProfileBuilder()
    .setMenu('top')
    .setBorders('soft')
    .setTheme('dark')
    .setCoverImg('url.jpg')
    .setBackgroundColor('red')
    .setMenuColor('white')
    .setProfileFont('Arial')
    .build();

console.log(profileBuilder.toString());
