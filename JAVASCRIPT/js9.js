// //Promises

// function f1(){
//     // setTimeout(() => {
//     //     return 5;
//     // }, 1000);
// // return 5;

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // resolve(5);
//             reject("Error occurred");
//         }, 1000);
//     });
// }
// function f2(x){
//     console.log(x+5);
// }
// // const n=f1();
// // const result=f2(n);
// // console.log(result);

// f1().then((result) =>   //f2 is dependent on f1, so we call f1 first and then pass the result to f2
//     f2(result)).catch((error) => 
//         console.error(error));



    // fetch("https://jsonplaceholder.typicode.com/posts") //fetchig data from an API
    // .then((response) => {
    //     return response.json();
    // })
    // .then((data) => {
    //     data.map((post) => {
    //         console.log(post.id, post.title);  //printing post id and title from the fetched data   
    //     });
        
    // })
    // .catch((error) => {
    //     console.error("There was a problem with the fetch operation:", error);
    // });

// Async/Await for fetching data
// Async/Await is a modern way to handle asynchronous operations in JavaScript, making the code
    const fetchData=async()=>{
        const res=await fetch("https://jsonplaceholder.typicode.com/posts")
        const data=await res.json();
        data.map((post) => {
            console.log(post.id, post.title);  //printing post id and title from the fetched data   
        });
    }
    fetchData();