// Old Syntax
var Course = function(title, author) {
    this.title = title;
    this.author = author;
};

Course.prototype.toString = function() {
    console.log(this.title + '... Author: ' + this.author);
};


var course = new Course('Mat Biec', 'Nguyen Nhat Anh');
course.toString();
