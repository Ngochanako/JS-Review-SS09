"use strict";
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getDescription() {
        console.log(this.name, this.price);
    }
}
class Electronics extends Product {
    constructor(name, price, brand) {
        super(name, price);
        this.brand = brand;
    }
    get() {
        super.getDescription();
        console.log(this.brand);
    }
}
let elec = new Electronics("huhu", 12, "èuheu");
elec.get();
