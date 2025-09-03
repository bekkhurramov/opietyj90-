// const num1=prompt("birinchi sonni kiriting");
// const num2=prompt("ikkinchi sonni kiriting");
// const multiply=function(num1,num2)
// {return num1*num2;
// };
// const result=multiply (Number(num1),Number(num2));
// alert('natija:'+result);


// function a() {
//     alert("hush kelibsz")
// }
// function b() {
//     alert("Kirish taqiqlanadi")
// }
// const age =prompt("yoshingizni kiriting")
// const yoshi=Number(age)
// if (yoshi > 18){
//     a ()
// }
// else {
//     b ()
// }

//
// const isprime =function (n) {
//     if (n <= 1) return false; {
//         for (let i = 2; i < n; i++) {
//             if (n % i === 0) return false;
//         }
//     }
//     return true;
// }


const calculator = function(a, b, operation) {
    if (operation === "+") {
        return a + b;
    } else if (operation === "-") {
        return a - b;
    } else if (operation === "*") {
        return a * b;
    } else if (operation === "/") {
        if (b === 0) {
            return " 0 ga bo‘lib bo‘lmaydi!";
        }
        return a / b;
    } else {
        return " Noto‘g‘ri amal kiritildi!";
    }
};


const num1 = Number(prompt("Birinchi sonni kiriting:"));
const num2 = Number(prompt("Ikkinchi sonni kiriting:"));
const op   = prompt("Amalni kiriting (+, -, *, /):");


const result = calculator(num1, num2, op);


alert("Natija: " + result);

