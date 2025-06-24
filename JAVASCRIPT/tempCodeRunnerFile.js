//closure

function main(){
    let a=10;
    function innerFunction() {
        console.log("Value of a:", a);
    }
    return innerFunction;
}
const f1=main();
console.log(f1); // This will log the innerFunction