

// extra task 1

// function sortDigits() {
//     let number = +prompt("Enter a three-digit number:");

//     console.log(number);

//     let a = parseInt(number / 100);
//     let b = parseInt(((number % 100) - (number % 10)) / 10);
//     let c = parseInt(number % 10);

//     if (a > b && b > c) {
//         console.log(`${c} ${b} ${a}`);
//     } else if (a > c && c > b) {
//         console.log(`${b} ${c} ${a}`);
//     } else if (b > a && a > c) {
//         console.log(`${c} ${a} ${b}`);
//     } else if (b > c && c > a) {
//         console.log(`${a} ${c} ${b}`);
//     } else if (c > a && a > b) {
//         console.log(`${b} ${a} ${c}`);
//     } else if (c > b && b > a) {
//         console.log(`${a} ${b} ${c}`);
//     }

// }

// sortDigits();




// task 1
// let number1 = +prompt
// let number2 = +prompt

// let result1 = number1 + number2
// console.log(result1);

// let result2 = number1 - number2
// console.log(result2);

// let result3 = number1 * number2
// console.log(result3);

// let result4 = number1 / number2
// console.log(result4);


// task 2
// let number = +prompt("enter number")
// console.log(number);

// if (number > 0) {
//     console.log(number - 1);
// }else{
//     console.log(number + 1);
// }


// task 3
// const reverse = (number) => {
//     if (number > 9 && number < 100) {
//         let a = parseInt(number / 10)
//         console.log(a);

//         let b = parseInt(number % 10)
//         console.log(b);

//     console.log(`${b} ${a}`);
//     }else{
//         console.log("You must enter only double-digits number");
//     }
// } 
// reverse(23)

// task 4
// const reverse = (number) => {
//     if (number >= 100 && number < 1000) {
//         let a = parseInt(number / 100);
//         console.log(a);
//         let b = parseInt(((number % 100) - (number % 10)) / 10);
//         console.log(b);
//         let c = parseInt(number % 10);
//         console.log(c);

//         console.log(`${c}  ${b} ${a}`);
//     } else {
//         console.log("You must enter only three-digits number");
//     }
// }
// reverse(321)


// task 5
// function checkGrade(number) {
//     if (number <= 100 && number >= 70 ) {
//         console.log(" You have got fully funded scolarship");
//     }else if (number < 70 && number >= 50 ) {
//         console.log(" You have accepted with tuition fee");
//     } else  {
//         console.log("Unfortunately , your score didn't fit for our university");
//     }

// }
// checkGrade(65)

