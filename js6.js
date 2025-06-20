// //objects
// const person = {
//     name: "Nishant",
//     age: 20
// }
// console.log(person.name); // Nishant
// console.log(person["age"]); // 20




const cart={
    1:3,
    3:5,
    5:2
}
const items = Object.keys(cart);
console.log(items); // ['1', '3', '5']
const tItems=Object.keys(cart).length;
console.log(tItems); // 3
const quantities = Object.values(cart);
console.log(quantities); // [3, 5, 2]
cart[2]=cart[2]+1;
console.log(cart); // { '1': 3, '2': NaN, '3': 5, '5': 2 }