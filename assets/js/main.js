"use strict";
//Task 1
let num1 = prompt("1.Eded daxil edin:");
let a = Number(num1)
let num2 = prompt("2.Eded daxil edin:");
let b = Number(num2)

let result = (a + b < 10) ? 'Yes' : 'No';
console.log(result);


// //Task 2
function numPower(num, pow) {
    let result = 1;
    for (let i = 1; i <= pow; i++) {
        result *= num;
    }
    return result;
}

let answr = numPower(16, 2);
console.log(answr);

//Task 3 //Islemir.


// let tbl=document.getElementById('tbl');
// let slc=document.getElementById('slc');

// function add(){

//     tbl.style.display = 'table';

    
//     let result='';
//     let color;
//     for(let i=1;i<=slc.value;i++){

//         result+=`<tr>`;

//         for(let j=1;j<=slc.value;j++){
//             color = (i+j)%2-1==0 ? 'gold': color = (i+j)%3 == 1 ? '': '' ;

//             result+=`<td style="background-color:${color};"> ${i}+${j} </td>`;
//         }
//         result+=`</tr>`;
//     }

//     tbl.innerHTML = result;
// }

// slc.addEventListener('change', add);





