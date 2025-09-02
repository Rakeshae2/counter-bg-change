// let a = 10;
// console.log(a);

// let a = 10;
// if(a%2==0){
//     console.log('even');
// }else{
//     console.log('odd');
// }

// let a=15;
// if(a%2==0){
//     console.log('divisible by 2');
// }else if(a%5==0){
//     console.log('divisible by 5');
// }else if(a%7==0){
//     console.log('divisible by 7');
// }

// let a=35;
// if(a%2==0){
//     console.log('divisible by 2');
// } if(a%5==0){
//     console.log('divisible by 5');
// }if(a%7==0){
//     console.log('divisible by 7');
// }


// let a = 12;
// let b = 115;
// let c = 70;
// if(a>b){
//     if(a>c){
//         console.log(a)
//     }else{
//         console.log(c)
//     }
// }else{
//     if(b>c){
//         console.log(b)
//     }else{
//         console.log(c)
//     }
// }


// let num = 18;

// if (num%2==0 && num%3==0 && num%6==0){
//     console.log('it is divisble by 2,3 and also 6')
// }

// let age = 21;

// if (age>=18){
//     console.log('your eligible for vote')
// }



// function add(a,b){
//     console.log(a+b)
// }


// add(10,20)


// let n=function(a){
//     if(a%2==0){
//         console.log('even');
//     }
//     else{
//         console.log('odd');
//     }
// }

// n(11)


// let text = document.getElementById("text")

function changeof(){
    text.textContent = "Namaskaram"
    text.style.color= "red";
    text.style.backgroundColor="skyblue";
}

let decrement = document.getElementById("decrement")
let increment = document.getElementById("increment")
let value1 = document.getElementById("value1")
let reset = document.getElementById("rest")
let couter = document.getElementById("couter")

function incrementbtn(){
    value1.textContent = 1 + + value1.textContent;
}
function decrementbtn(){
    if (value1.textContent>0){
        value1.textContent = value1.textContent - '1';
    }
}
function resetbtn(){
    value1.textContent = "0";
}

function orangebt(){
    couter.style.backgroundColor= "orange"
}
function bluebt(){
    couter.style.backgroundColor= "blue"
}
function greenbt(){
    couter.style.backgroundColor= "green"
}
function redbt(){
    couter.style.backgroundColor= "red"
}


