'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function sockMerchant(n, ar) {
    var res = 0;
    ar.sort();
    for(let i=0; i<n;i++){
        if(ar[i] == ar[i+1]){
            i++;
            res++;
        }
    }
    return res;
}

// Complete the sockMerchant function below.
/*function sockMerchant(n, ar) {
    var pairs
    let total = 0
    ar.forEach(function(value, index, array ){
        let counter = 0
        console.log(array)
        if(array.includes(value)){
            for(let arr of array){
                console.log('continue',arr)
                if(array.includes(value)){
                    counter += 1
                    let op = array.splice(array.indexOf(value), 1)
                    console.log('Splice:',array,' count:',counter)
                    continue
                }
            }
            console.log('Counter:',counter)
        }

        if(counter > 2){
            console.log('Remainder:',Math.floor(counter/2))
            total += Math.floor(counter/2)
            console.log('Total:',total)
        }
    })
    return total
}
*/
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}
