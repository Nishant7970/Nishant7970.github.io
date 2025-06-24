//closure

function main(){
    let a=10;
    function sub() {   //this sub function is a closure
        return a++;
    }
    return sub;
}
const f1=main();
console.log(f1()); // This will log the innerFunction
console.log(f1()); // This will log the innerFunction again, incrementing a each time