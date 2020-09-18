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

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
    //const re = '^(Mr.|Mrs.|MS.|Dr.|ER.)(\\.)([a-zA-Z])+$'
    // ^(Mr|Mrs|Ms|Dr|Er) --> Start with MR or MRS or MS ..etc
    // (\\.) --> Followed by '.' string. // to escape '.' as string
    // ([a-zA-Z])+$ --> a to z and A to Z followed by '.' 
    const re = '^(Mr|Mrs|Ms|Dr|Er)(\\.)([a-zA-Z])+$'
    
    /*
     * Do not remove the return statement
     */
    return re;
}


function main() {
    const re = regexVar();
    const s = readLine();
    
    console.log(!!s.match(re));
}