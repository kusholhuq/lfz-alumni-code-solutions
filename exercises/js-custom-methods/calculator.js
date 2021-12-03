/* exported calculator */

var calculator = {
  add: function(a,b){
    return a+b;
  },
  subtract: function(a,b){
    return a-b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  square: function (a) {
    return a * a;
  },
  sumAll: function (array) {
    let sum = 0;
    for(let i=0; i<array.length; i++){
      sum+=array[i];
    }
    return sum;
  },
  getAverage: function (array) {
    return this.sumAll(array)/array.length;
  }
};
