/* exported Account */
function Account (number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount > 0){
    const depositTransaction = new Transaction('deposit', amount);
    this.transactions.push(depositTransaction);
    return true;
  } else {
    return false;
  }

}

Account.prototype.withdraw = function (amount) {
  if (amount > 0) {
    const withdrawalTransaction = new Transaction('withdraw', amount);
    this.transactions.push(withdrawalTransaction);
    return true;
  } else {
    return false;
  }
}

Account.prototype.getBalance = function () {
  if(this.transactions.length === 0){
    return 0
  }
  let balance = 0;
  for(let i=0; i<this.transactions.length; i++){
    if(this.transactions[i].type === "deposit"){
      balance += this.transactions[i].amount
    }
    if (this.transactions[i].type === "withdraw") {
      balance -= this.transactions[i].amount
    }
  }
  return balance;
}
