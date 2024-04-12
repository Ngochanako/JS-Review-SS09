"use strict";
class Account {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(money) {
        this.balance += money;
    }
    withdraw(money) {
        if (this.balance > money) {
            this.balance -= money;
        }
        else {
            console.log("Không có đủ tiền để rút");
        }
    }
}
class SavingAccounts extends Account {
    constructor(accountNumber, balance, interestRate) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }
    calculateInterst() {
        let interest = this.balance * this.interestRate;
        console.log(interest);
    }
}
let account = new SavingAccounts(1, 100000, 10);
account.calculateInterst();
account.deposit(50000);
account.calculateInterst();
