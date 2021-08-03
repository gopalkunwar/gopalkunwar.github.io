"use strict";

class CheckingAccount extends Account {
    constructor(odLimit, number) {
        super(number);
        this._odLimit = odLimit;
    }

    getOdlimit() {
        return this._odLimit;
    }
    setOdlimit(odLimit) {
        this._odLimit = odLimit;
    }
    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");

        }
        if (amount > this._odLimit + this._balance) {
            throw Error("Over the draft limit");
        }
        this._balance -= amount;
    }

    toString() {
        return "Checking Account " + this.getNumber() + ": balance " + this.getBalance() + ": overdraft limit " + this._odLimit;
    }
    endOfMonth() {
        if (this.getBalance() < 0) {
            return `Warning, low balance CheckingAccount ${this.getNumber()}: balance: ${this.getBalance()} overdraft limit: ${this._odLimit}`;

        }
        return "";
    }
}