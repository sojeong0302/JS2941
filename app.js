const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin': __dirname+'/example.txt';
let input = fs.readFileSync(filePath).toString().trim();

//input = input.split("");

let check = 0;

//c=랑 s=
function solution(input){
    for (let i = 0; i < input.length; i++){
        if(input[i] === '=' ){
            if((input[i-1] === 's') || (input[i-1] === 'c')){
                check += 1;
            }
        }
    }

    //console.log("출력해줘"+check);

    //그 dz=랑 z= 보는거
    for (let i = 0; i < input.length; i++){
        if(input[i] === 'z' ){
            if(input[i+1] === '=' && input[i-1] === 'd'){
                check += 2;
            }else if(input[i+1] === '=' && input[i-1] != 'd'){
                check += 1;
            }
        }
    }

    //console.log("출력해줘"+check);

    //c-랑 d-
    for (let i = 0; i < input.length; i++){
        if(input[i] === '-'){
            if(input[i-1] === 'c'){
                check += 1;
            }
            else if(input[i-1]==='d'){
                check += 1;
            }
        }
    }
    //console.log("출력해줘"+check);
    for (let i = 0; i < input.length; i++){
        if(input[i] === 'j'){
            if(input[i-1] === 'l' || input[i-1] === 'n'){
                check += 1;
            }
        }
    }

    console.log(input.length-check)

    }

solution(input)
