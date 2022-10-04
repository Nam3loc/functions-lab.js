/*
Functions continued


Things to Remember:
    DRY - "dont repeat yourself"
    Have good input (Garbage in, garbage out)
*/

// 2 Ways to Write a Function

    // Function declaration

    function sayHello(name){
        // console.log("Hello " + name + "!");
    }

    sayHello("Coleman");

        // Function Expression
            //function declaration gets hoisted to the top and can call a return BEFORE the function is declared
            //function expression can not be called before it is declared because it is not hoisted to the top

    const sayHelloAgain = function (name){
        // if(typeof name !== "string"){
        //     console.log("Input was not a string. Try again.")
        //     return;
        // }
        // console.log("Hello " + name + "!");
        // console.log(`Hello ${name}!`);
    }

    sayHelloAgain(20);

        // Arrow functions ( has an example of default perameters)

    const add = (num1 = 10, num2 = 1) => num1 + num2;

    // console.log(add(2, 1));

    function areBothEven(n1, n2){
        if(typeof n1 !== "number" || typeof n2 !== "number"){
            console.log("Input needs to be a number. Try Again.")
            return;
        } else{
            return !(n1 % 2) && !(n2 % 2);
        }
    }

    // console.log(areBothEven(2, "six"));

// 0 - falsey
// anything that isn't zero is truthy
// "christina" - truthy
// "" - falsey

  // Example of truthy and falsey in a real scerniao
// const arr = []

// if (arr.length) {
//   console.log("I have elements!!")
// } else {
//   console.log("i'm empty:(")
// }


console.log(areBothEven(2, 8))