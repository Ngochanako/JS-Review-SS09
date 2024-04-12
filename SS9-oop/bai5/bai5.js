"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
}
class Manager extends Employee {
    constructor(a, b, c, teamSize) {
        super(a, b, c);
        this.teamSize = teamSize;
    }
    print() {
        console.log(this.company); //không lỗi do phạm vi là protected
        console.log(this.phone); //lỗi do phạm vi là private
    }
}
//Private: Thuộc tính hoặc phương thức được khai báo là private chỉ có thể được truy cập từ bên trong cùng một lớp mà nó được khai báo. Các thành phần private không thể được truy cập từ bên ngoài lớp đó hoặc các lớp con kế thừa từ lớp đó.
//Protected: Thuộc tính hoặc phương thức được khai báo là protected cũng giống như private ngoại trừ việc chúng có thể được truy cập từ các lớp con kế thừa từ lớp đó. Các thành phần protected không thể được truy cập từ bên ngoài lớp đó, nhưng có thể được truy cập từ các lớp con.
