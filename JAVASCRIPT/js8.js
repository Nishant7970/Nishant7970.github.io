//JSON

const students = '{"name": "Nishant", "age": 20, "city": "New Delhi"}';
const studentObj = JSON.parse(students);
console.log(studentObj);  // Output: Nishant
console.log(JSON.stringify(studentObj));  // Output: {"name":"Nishant","age":20,"city":"New Delhi"}
