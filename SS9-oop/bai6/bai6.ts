class Product{
    protected name:string;
    protected price:number;
    constructor(name:string,price:number){
        this.name=name;
        this.price=price;
    }
    getDescription(){
        console.log(this.name,this.price);
    }
}
class Electronics extends Product{
    private brand:string;
    constructor(name:string,price:number,brand:string){
        super(name,price);
        this.brand=brand;
    }
    get(){
        super.getDescription();
        console.log(this.brand);
    }
}
let elec=new Electronics("huhu",12,"èuheu");
elec.get();