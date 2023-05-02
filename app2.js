const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/example.txt";
let input = fs.readFileSync(filePath).toString().trim();

//input = input.split("");

let check = 0;

function solution(input){
  for (let i = 0; i <= input.length - 1; i++){
    if(input[i] === '=' ){
      if(input[i-1] === 's' || input[i-1] === 'c'){
        check += 1;
      }
    }
  }

   for (let i = 0; i <= input.length - 1; i++){
     if(input[i] === 'z' ){
       if(input[i+1] === '=' && input[i-1] === 'd'){
        check += 2;
        }
       else if(input[i+1] === '=' && input[i-1] !== 'd'){
        check += 1;
       }
      }
    }

    for (let i = 0; i <= input.length - 1; i++){
      if(input[i] === '-' && input[i-1] === 'c' ){
          check += 1;
        }else if(input[i] === '-' && input[i-1]==='d'){
            check += 1;
        }
      }

    for (let i = 0; i <= input.length - 1; i++){
      if(input[i] === 'j'){
          if(input[i-1] === 'l' || input[i-1] === 'n'){
            check += 1;
          }
        }
      }
  console.log(input.length-check)

    
}


solution(input)