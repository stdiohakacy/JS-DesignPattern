const {CourseBuilder, HotAndNew, BestSeller} = require('./CourseBuilder');

const courseBuilder = new CourseBuilder('Design pattern course').makePaid(20).makeCampain().build();

const hotNew = new HotAndNew(courseBuilder);
const bestSeller = new BestSeller(courseBuilder);

console.log(courseBuilder.toString(hotNew));
console.log(courseBuilder.toString(bestSeller));
