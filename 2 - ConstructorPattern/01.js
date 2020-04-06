// Old syntax

var Course = function(title, author) {
    this.title = title;
    this.author = author;

    this.toString = function() {
        return this.title + '... Author : ' + this.author;
    };
};

var course01 = new Course('Bootstrap 4', 'Duy');
var course02 = new Course('Design Pattern', 'Paul');

console.log(course01.toString());
console.log(course02.toString());
