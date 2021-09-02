var student = {
  firstName: "Kushol",
  lastName: "Huq",
  age: 27
};

var fullName = student.firstName + " " + student.lastName;
console.log("fullName: ", fullName);


student.livesInIrvine = true;
student.previousOccupation = "Gymnastics Coach";
console.log("livesInIrvine: ", student.livesInIrvine);
console.log("previousOccupation: ", student.previousOccupation);
console.log("student: ", student);

var vehicle = {
  make: "Chevrolet",
  model: "Cruze",
  year: 2018
};

vehicle["color"] = "Black";
vehicle["isConvertible"] = false;
console.log("color: ", vehicle["color"]);
console.log("isConvertible: ", vehicle["isConvertible"]);
console.log("vehicle: ", vehicle);

var pet = {
  name: "Moey",
  type: "cat"
}

delete pet.name;
delete pet.type;
console.log("pet: ", pet);
