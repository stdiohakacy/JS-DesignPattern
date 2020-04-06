const CourseBuilder = require('./CourseBuilder');

const course01 = new CourseBuilder('DP01').makePaid(100).makeCampain().build();
const course02 = new CourseBuilder('DP02').build();
course01.toString();
course02.toString();
