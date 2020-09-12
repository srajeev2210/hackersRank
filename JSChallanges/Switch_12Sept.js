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


function getLetter(s){
    const a = ['a','e','i','o','u']
    const b = ['b','c','d','f','g']
    const c = ['h','j','k','l','m']
    const d = ['n','p','q','r','s','t','v','w','x','y','z']
    
    switch (true){
        case a.includes(s.charAt(0)):
            return 'A'
        case b.includes(s.charAt(0)):
            return 'B'
        case c.includes(s.charAt(0)):
            return 'C'
        case d.includes(s.charAt(0)):
            return 'D'

    }
}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}