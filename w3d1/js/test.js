(function () {
    describe("Account", function () {
        beforeEach(() => {
            account = new Account(12345);
        });

        describe("getNumber", function () {
            it("Returns the accounts number", function () {
                assert.equal(account.getNumber(), 12345);
            });
        });

        describe("getBalance", function () {
            it("Returns the accounts balance", function () {
                assert.equal(account.getBalance(), 0);
            });
        });

        describe("deposit", function () {
            describe("When the given amount is more than zero", function () {
                it("Increment the account balance by given amount", function () {
                    account.deposit(100)
                    assert.equal(account.getBalance(), 100);
                });
            });

            describe("When the given amount is less than zero", function () {
                it("Throws an error",
                    function () {
                        assert.throws(() => { account.deposit(-12) }, Error, "Deposit amount has to be greater than zero");
                    });
            });
        });


        describe("withdraw", function () {
            describe("When the given amount is more than the balance", function () {
                it("Throws an Error with Withdraw amount has to be greater than zero", function () {
                    assert.throws(() => { account.withdraw(-1) }, Error, "Withdraw amount has to be greater than zero");
                });
            });

            describe("When the given amount is less than or equal to 0", function () {
                it("Throws an Error with Insufficient funds", function () {
                    assert.throws(() => { account.withdraw(200) }, Error, "Insufficient funds");
                });
            });

            describe("When the given amount is valid", function () {
                it("Decrease the account balance by given amount", function () {
                    account.deposit(120);
                    account.withdraw(100);
                    assert.equal(account.getBalance(), 20);
                });
            });
        });

        describe("endOfMonth", function () {
            it("Print the details of account", function () {
                assert.equal(account.endOfMonth(), '');
            });
        });

        describe("toString", function () {
            it("Print the account details", function () {
                assert.equal(account.toString(), `Account ${account.getNumber()}: balance ${account.getBalance()}`);
            });
        });
    });

    describe("SavingsAccount", function () {
        beforeEach(() => {
            savingsAccount = new SavingsAccount(0.09, 12345);
        });

        describe("setInterest", function () {
            it("sets the account interest", function () {
                savingsAccount.setInterest(0.15);
                assert.equal(savingsAccount.getInterest(), 0.15);
            });
        });

        describe("addInterest", function () {
            it("deposits the balance interest into account", function () {
                savingsAccount.deposit(100);
                savingsAccount.addInterest()
                assert.equal(savingsAccount.getBalance(), 100.09);
            });
        });

        describe("getInterest", function () {
            it("Returns the account interest", function () {
                assert.equal(savingsAccount.getInterest(), 0.09);
            });
        });

        describe("endOfMonth", function () {
            it("Print details of savings account", function () {
                savingsAccount.deposit(100);
                savingsAccount.addInterest()
                assert.equal(savingsAccount.endOfMonth(), 'Interest added SavingsAccount 12345: balance: 100.180081 interest: 0.09');
            });
        });

        describe("toString", function () {
            it("Prints savings account details", function () {
                assert.equal(savingsAccount.toString(), `Savings Account ${savingsAccount.getNumber()}: balance ${savingsAccount.getBalance()}: interest ${savingsAccount.getInterest()}`);
            });
        });
    });

    describe("CheckingAccount", function () {
        beforeEach(() => {
            checkingAccount = new CheckingAccount(1000, 12345);
        });



        describe("setOverdraftLimit", function () {
            it("sets account overdraftLimit", function () {
                checkingAccount.setOdlimit(500);
                assert.equal(checkingAccount.getOdlimit(), 500);
            });
        });

        describe("getOverdraftLimit", function () {
            it("Returns the account overdraftLimit", function () {
                assert.equal(checkingAccount.getOdlimit(), 1000);
            });
        });

        describe("withdraw", function () {
            describe("When the given amount is more than the balance", function () {
                it("Throws Error with Withdraw amount has to be greater than zero", function () {
                    assert.throws(() => { checkingAccount.withdraw(-1) }, Error, "Withdraw amount has to be greater than zero");
                });
            });

            describe("When the given amount is less than or equal to 0", function () {
                it("Throws Error with Over the draft limit", function () {
                    checkingAccount.deposit(100);
                    assert.throws(() => { checkingAccount.withdraw(1101) }, Error, "Over the draft limit");
                });
            });

            describe("When the given amount is valid", function () {
                it("Decrease account balance by given amount", function () {
                    checkingAccount.deposit(120);
                    checkingAccount.withdraw(100);
                    assert.equal(checkingAccount.getBalance(), 20);
                });
            });
        });

        describe("endOfMonth", function () {
            describe("When the balance is less than 0", function () {
                it("Prints warning details of checking account", function () {
                    checkingAccount.deposit(120);
                    checkingAccount.withdraw(300);
                    assert.equal(checkingAccount.endOfMonth(), 'Warning, low balance CheckingAccount 12345: balance: -180 overdraft limit: 1000');
                });
            });

            describe("When the balance is greater than 0", function () {
                it("Prints details of checking account", function () {
                    assert.equal(checkingAccount.endOfMonth(), '');
                });
            })


        });

        describe("toString", function () {
            it("Prints checking account details", function () {
                assert.equal(checkingAccount.toString(), `Checking Account ${checkingAccount.getNumber()}: balance ${checkingAccount.getBalance()}: overdraft limit ${checkingAccount.getOdlimit()}`);
            });
        });
    });


    describe("Bank", function () {
        beforeEach(() => {
            bank = new Bank();
        });

        describe("addAccount", function () {
            it("adds an account, and returns number of accounts", function () {
                bank.addAccount(15);
                assert.equal(bank.addAccount(224), 2);
            });
        });

        describe("addCheckingAccount", function () {
            it("adds a checking account, and returns number of accounts", function () {
                assert.equal(bank.addCheckingAccount(1000, 125), 1);
            });
        });

        describe("addSavingsAccount", function () {
            it("adds a savings account, and returns number of accounts", function () {
                assert.equal(bank.addSavingsAccount(0.04, 1234), 1);
            });
        });

        // describe("accountReport", function () {
        //     it("Prints details of each existing account", function () {
        //         bank.addCheckingAccount(1000, 125);
        //         bank.addAccount(224);
        //         bank.addSavingsAccount(0.04, 1234);
        //         assert.equal(bank.accountReport(), "Checking Account 125: balance 0: overdraft limit 1000\nAccount 224: balance 0\nSavings Account 1234: balance 0: intreset 0.04");
        //     });
        // });

    });
})();