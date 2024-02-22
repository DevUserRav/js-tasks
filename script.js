// for (let i = 1; i <= 50; i++) {   
//     if (i % 2 == 0 ){
//         console.log(`${i} juft son`);
//     }
//     else {
//         console.log(`${i} toq son`);
//     }
// }


// for (let x = 1; x <= 50; x++) {   
//         if (x % 3 === 0 && x % 5 === 0){
//             console.log("FizzBuzz");
//         } else if (x % 3 === 0) {
//             console.log("Fizz");
//         } else if (x % 5 === 0){
//             console.log("Buzz");
//         }
//         else {
//             console.log(x);
//         }
// }


// let sum = 0; 
// for (let i = 1; i <= 10; i++){
//     sum += i;
// }
// console.log(sum);



function calcNumbers (num){
    for (let i = 1; i< 11; i++){
        let sum = num * i;
        console.log(`${num} * ${i} = ${sum}`);
    }
    return num;
}

calcNumbers(6);