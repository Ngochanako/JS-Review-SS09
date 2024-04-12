class Parent{
    userName:string;
    password:string;
    constructor(userName:string,password:string){
        this.userName=userName;
        this.password=password;
    }
    sayHello():void{
        console.log(this.userName);
    }
}
//class con kế thừa class cha thì bắt buộc dùng từ khóa extend
class Child extends Parent{
    address:string;
    constructor(a:string,b:string,address:string){
        super(a,b);
        this.userName=a;
        this.password=b;
        this.address=address;
    }
}
class Child11 extends Child{
    constructor(userName:string,password:string,address:string){
        super(userName,password,address);
        this.userName=userName;
        this.password=password;
        this.address=address;
    }
    //ghi đè phuuwong thức
    sayHello():void{
        console.log("kkk")
    }
}
