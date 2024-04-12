class Vehicle{
    protected name:string;
    protected speed:number;
    protected id:number;
    constructor(name:string,speed:number,id:number){
        this.name=name;
        this.speed=speed;
        this.id=id;
    }
    slowDow(){
        this.speed=this.speed-1;
    }
    speedUp(){
        this.speed=this.speed+1;
    }
    showSpeed(){
        console.log(this.speed);
    }
}
class Bicycle extends Vehicle{
    private gear:number;
    constructor(name:string,speed:number,id:number,gear:number){
        super(name,speed,id);
        this.gear=gear;
    }
}
let bicycle= new Bicycle("dfff",56,12,7);
bicycle.slowDow()
bicycle.showSpeed()
bicycle.speedUp()
bicycle.showSpeed()