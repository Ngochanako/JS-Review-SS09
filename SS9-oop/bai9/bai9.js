"use strict";
class Shape {
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}
function createShape(arg1, arg2) {
    if (arg2 === undefined) {
        // Nếu chỉ có một đối số, tạo hình tròn
        return new Circle(arg1);
    }
    else {
        // Nếu có hai đối số, tạo hình chữ nhật
        return new Rectangle(arg1, arg2);
    }
}
// Sử dụng các lớp và hàm overload đã định nghĩa
const rectangle = createShape(5, 10);
const circle = createShape(7);
console.log("Diện tích hình chữ nhật:", rectangle.calculateArea());
console.log("Diện tích hình tròn:", circle.calculateArea());
