"use strict";
class Parent {
    constructor(userName, password) {
        this.userName = userName;
        this.password = password;
    }
    sayHello() {
        console.log(this.userName);
    }
}
//class con kế thừa class cha thì bắt buộc dùng từ khóa extend
class Child extends Parent {
    constructor(a, b, address) {
        super(a, b);
        this.userName = a;
        this.password = b;
        this.address = address;
    }
}
class Child11 extends Child {
    constructor(userName, password, address) {
        super(userName, password, address);
        this.userName = userName;
        this.password = password;
        this.address = address;
    }
    //ghi đè phuuwong thức
    sayHello() {
        console.log("kkk");
    }
}
