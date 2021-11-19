var array = [
  {
    isbn:1234,
    title: "The lord of the rings",
    author: "Mahatma Ghandi"
  },
  {
    isbn:23423545,
    title: "Naruto",
    author: "Masashi Kishimoto"
  },
  {
    isbn: 1243545435,
    title: "Jujutsu Kaisen",
    author: "Gege Akutami"
  }
];

console.log("Array stringified: ", JSON.stringify(array));
console.log("Array stringified typeof: ", typeof JSON.stringify(array));

var studentString = `{
  "name": "Ezio Auditore",
  "id":3
}`


console.log("student string: ", studentString)
console.log("student string typeof: ", typeof studentString)

var studentParsed = JSON.parse(studentString)


console.log("student parsed: " , studentParsed)
console.log("student parsed typeof: " , typeof studentParsed)
