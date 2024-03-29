/* exported Bank */
function Bank () {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if(balance > 0){
    const newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;
    return newAccount.number;
  } else {
    return null;
  }
}

Bank.prototype.getAccount = function (number) {
  for(let i=0; i < this.accounts.length; i++){
    if(this.accounts[i].number === number){
      return this.accounts[i];
    }
  }
  return null;
}

Bank.prototype.getTotalAssets = function () {
  let sum = 0;
  for(let i=0; i<this.accounts.length; i++){
    sum += this.accounts[i].getBalance();
  }
  return sum;
}
