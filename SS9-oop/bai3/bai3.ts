class Person{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    displayInfo(){
        console.log(this.name);
    }
}
class Student extends Person{
    id:number;
    constructor(name:string,id:number){
        super(name);
        this.id=id;
    }
}
let student=new Student("ng",4);
student.displayInfo();