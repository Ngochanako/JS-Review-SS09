"use strict";
class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDow() {
        this.speed = this.speed - 1;
    }
    speedUp() {
        this.speed = this.speed + 1;
    }
    showSpeed() {
        console.log(this.speed);
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
}
let bicycle = new Bicycle("dfff", 56, 12, 7);
bicycle.slowDow();
bicycle.showSpeed();
bicycle.speedUp();
bicycle.showSpeed();
