class Account{
    protected accountNumber:number;
    protected balance:number;
    constructor(accountNumber:number,balance:number){
        this.accountNumber=accountNumber;
        this.balance=balance;
    }
    deposit(money:number):void{
         this.balance+=money;
    }
    withdraw(money:number):void{
        if(this.balance>money){
            this.balance-=money;
        }else{
            console.log("Không có đủ tiền để rút")
        }
    }
}
class SavingAccounts extends Account{
     private interestRate:number;
     constructor(accountNumber:number,balance:number,interestRate:number){
        super(accountNumber,balance);
        this.interestRate=interestRate;
     }
     calculateInterst(){
        let interest:number=this.balance*this.interestRate;
        console.log(interest);
     }
}
let account=new SavingAccounts(1,100000,10);
account.calculateInterst();
account.deposit(50000)
account.calculateInterst()