class Employee{
    name:string;
    protected company:string;
    private phone:string;
    constructor(name:string,company:string,phone:string){
        this.name=name;
        this.company=company;
        this.phone=phone;
    }
    get phone1(){
        return this.phone;
    }
    printInfo(){
       console.log(this.name,this.company,this.phone);
    }
}
class Manager extends Employee{
    teamSize:number
    constructor(a:string,b:string,c:string,teamSize:number){
        super(a,b,c);
        this.teamSize=teamSize;
    }
}
let employee=new Manager("shdh","huhu","03859584958",8);
employee.printInfo();
