"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    get phone1() {
        return this.phone;
    }
    printInfo() {
        console.log(this.name, this.company, this.phone);
    }
}
class Manager extends Employee {
    constructor(a, b, c, teamSize) {
        super(a, b, c);
        this.teamSize = teamSize;
    }
}
let employee = new Manager("shdh", "huhu", "03859584958", 8);
employee.printInfo();
