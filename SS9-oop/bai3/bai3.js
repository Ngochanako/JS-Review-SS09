"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(this.name);
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
}
let student = new Student("ng", 4);
student.displayInfo();
