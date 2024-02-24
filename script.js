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



//     for (let i = 1; i< 11; i++){
//         let sum = num * i;
//         console.log(`${num} * ${i} = ${sum}`);
//     }
//     return num;
// }

// calcNumbers(6);

// -------- hw -------


const calcTip = function (bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
let bills = [22,295,176,440,37,105,10,1100,86,52];
const tips = [];
const totals = [];
    for (let i = 0; i < bills.length; i++){
        const tip = calcTip(bills[i]);       
        tips.push(tip);
        totals.push(tip + bills[i]);
    }

    const calcAverage = function (arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++){
            sum +=arr[i];
        } 
        return sum / arr.length;
    }
console.log(calcAverage([bills]));
console.log(calcAverage([tips]));
console.log(calcAverage([totals]));
console.log(tips);
console.log(totals);
