'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}
/*
 * Create the function factorial here
 */
function factorial(n){
    let factt
    while((n-1) > 0){ 
        let temp = factt
        if(temp != undefined){
            factt = temp * (n-1)
        }
        else{
            factt = n * (n-1)
        }
        n = n - 1
    }
    return factt;
}


function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}