const Category = require('./Category');
// const Sales = require('./Sales');
const Shopper = require('./Shopper');

// const designCategory = new Category('Design Category');
const webCategory = new Category('Web Category');
// const photoshopCategory = new Category('Photoshop Category');

const paul = new Shopper('Paul');
const mike = new Shopper('Mike');
const john = new Shopper('John');

// const blackFriday = new Sales();

webCategory.subscribe(paul);
webCategory.subscribe(mike);
webCategory.subscribe(john);

webCategory.sale(20);
