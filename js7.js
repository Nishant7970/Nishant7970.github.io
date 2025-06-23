//array
// const arr = [1, 2, 3, 4, 5];
// console.log(arr); // [1, 2, 3, 4, 5]
// console.log(arr[0]); // 1
// arr.push(6);
// console.log(arr); // [1, 2, 3, 4, 5, 6]
// arr.pop();
// console.log(arr); // [1, 2, 3, 4, 5]
// console.log(arr.length); // 5

// const arr2 = [ 3, 4, 5];
// const newArr = arr.concat(arr2);
// console.log(newArr); // [1, 2, 3, 4, 5, 3, 4, 5]


let cart={}
const products = [
    { id: 1, name: "Product 1", price: 100 },   
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 }
];
// console.log(products); // Array of objects
// console.log(products[0]); // { id: 1, name: "Product 1", price: 100 }
// console.log(products[0].name); // Product 1
//const newProduct =[...products,{ id: 4, name: "Product 4", price: 400 }];

// Adding a product to the cart
// function addToCart(id){
//     cart={...cart,[id]:1}
// }
// addToCart(1);
// addToCart(2);
// console.log(cart); // { '1': 1 }
// const score=[2,3,5,7,3];
// score.forEach((value)=>{
//     console.log(value); // 2, 3, 5, 7, 3
// })

// const score=[2,3,5,7,3];
// score.map((value)=>{
//     console.log(value); // 2, 3, 5, 7, 3
// })


// const score=[2,3,5,7,3];
// const newScore = score.map((value)=>{
//     return value*2;     
// });
// console.log(newScore); // [4, 6, 10, 14, 6]

// const score=[2,3,5,7,3];
// const newScore = score.filter((value)=>{
//     return value>3;     
// });
// console.log(newScore); // [5, 7]

// const score=[2,3,5,7,3];
// const newScore = score.find((value)=>{
//     return value===3;     
// });
// console.log(newScore); // 5---retun first match

const score=[2,3,5,7,3];
const newScore = score.reduce((sum,value)=>{
    return sum+value;     
});
console.log(newScore); // 20---sum of all elements