abstract class Shape {
    abstract calculateArea(): number;
}

class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super();
    }

    calculateArea(): number {
        return this.width * this.height;
    }
    calculatePerimeter():number{
        return (this.width+this.height)*2;
    }
}

class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }

    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }
    calculatePerimeter():number{
        return Math.PI*this.radius*2;
    }
}

// Hàm overload cho việc khởi tạo các hình học
function createShape(width: number, height: number): Rectangle;
function createShape(radius: number): Circle;
function createShape(arg1: number, arg2?: number): Shape {
    if (arg2 === undefined) {
        // Nếu chỉ có một đối số, tạo hình tròn
        return new Circle(arg1);
    } else {
        // Nếu có hai đối số, tạo hình chữ nhật
        return new Rectangle(arg1, arg2);
    }
}

// Sử dụng các lớp và hàm overload đã định nghĩa
const rectangle = createShape(5, 10);
const circle = createShape(7);

console.log("Diện tích hình chữ nhật:", rectangle.calculateArea()); 
console.log("Chu vi hình chữ nhật:", rectangle.calculatePerimeter()); 
console.log("Diện tích hình tròn:", circle.calculateArea()); 
console.log("Chu vi hình tròn:", circle.calculatePerimeter()); 
