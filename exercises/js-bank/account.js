/* exported Account */
function Account (number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount > 0){

  } else {
    return false;
  }
  const depositTransaction = new Transaction('deposit', amount );
  this.transactions.push(depositTransaction);
  return true;

}

Account.prototype.withdraw = function () {

}

Account.prototype.getBalance = function () {

}
