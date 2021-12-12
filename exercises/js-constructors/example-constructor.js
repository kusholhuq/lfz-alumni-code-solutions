function ExampleConstructor () {

}

console.log("ExampleConstructor.prototype" , ExampleConstructor.prototype);
console.log("typeof ExampleConstructor.prototype", typeof ExampleConstructor.prototype);

var exampleInstance = new ExampleConstructor();
console.log("exampleInstance: ", exampleInstance);

var isInstanceOfConstructor = exampleInstance instanceof ExampleConstructor
console.log("isInstanceOfConstructor", isInstanceOfConstructor);
