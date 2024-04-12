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
class CheckingAccount extends Account{
    private overDraftLimit:number;
    constructor(accountNumber:number,balance:number,overDraftLimit:number){
        super(accountNumber,balance);
        this.overDraftLimit=overDraftLimit;
    }
    withdraw(money: number): void {
        if(this.balance>money){
            if(money<this.overDraftLimit){
                this.balance-=money;
            }else{
                console.log("Số tiền vượt quá hạn mức cho phép")
            }
        }else{
            console.log("Số tiền trong tài khoản không đủ")
        }
    }
}
let account=new  CheckingAccount(1,200000,100000);
account.withdraw(120000);