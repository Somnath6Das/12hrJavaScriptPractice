class Bank {
  constructor(balance) {
    this.balance = balance;
  }
  withdraw(amount) {
    if (this.balance - amount < -1) {
      console.log("You don't have money in your bank account");
      console.log({ balance: this.balance });
      return;
    } else {
      this.balance -= amount;
      console.log("withdrow", `$${amount}`);
      console.log({ balance: this.balance });
    }
  }
  deposit(amount) {
    this.balance += amount;
    console.log("deposited", `$${amount}`);
    console.log({ balance: this.balance });
  }
}




const somChecking = new Bank(0);

const depositButton = document.getElementById('deposit');
const withdrewButton = document.getElementById('withdrew');
const amountInput = document.getElementById('amount');
const balanceDiv = document.getElementById('balance');



depositButton.onclick = () => {
  const amount  = Number(amountInput.value);
  somChecking.deposit(amount);
  balanceDiv.innerText = `Balance: ${somChecking.balance}`

};


withdrewButton.onclick = () => {
  const amount = Number(amountInput.value);
  somChecking.withdraw(amount);
  balanceDiv.innerText =`Balance: ${somChecking.balance}`
};