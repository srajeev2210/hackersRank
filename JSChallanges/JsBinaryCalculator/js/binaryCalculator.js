var res = document.getElementById('res');
    function checkOperator(){
        if(res.innerHTML.endsWith('+') || res.innerHTML.endsWith('-') || res.innerHTML.endsWith('*') || res.innerHTML.endsWith('/')){
            return true;
        }
        else{
            return false;
        }
    }
    
    function clickZero(){
        res.innerHTML += 0
    }
    
    function clickOne(){
        res.innerHTML += 1
    }
    
    function clickClr(){
        if(res.innerHTML.length != 0 ){
            res.innerHTML = '' 
        }
    }
    
    function clickSum(){
        if(res.innerHTML.length != 0 && !checkOperator()){
            res.innerHTML += '+'
        }
    }
    
    function clickSub(){
        if(res.innerHTML.length != 0 && !checkOperator()){
            res.innerHTML += '-'
        }
    }
    
    function clickMul(){
        if(res.innerHTML.length != 0 && !checkOperator()){
            res.innerHTML += '*'
        }
    }
    
    function clickDiv(){
        if(res.innerHTML.length != 0 && !checkOperator()){
            res.innerHTML += '/'
        }   
    }
    function clickEql(){
      if(!checkOperator()) {
          
        let re = /\d+/g
        let re2 = /[\+\-\*\/]+/g
        let numbers = res.innerHTML.match(re);
        let operations = res.innerHTML.match(re2);
        let indexOfSum = operations.indexOf('+');
        
        while(operations.length>0) {
          if(operations.includes('*')) {
            let indexOfMul = operations.indexOf('*');
            let mul = ( indexOfMul!=0 ? parseInt(numbers[indexOfMul-1],2) : parseInt(numbers[indexOfMul],2) ) * parseInt(numbers[indexOfMul+1],2);
            numbers.splice(indexOfMul,2);
            numbers.splice(indexOfMul,0,mul.toString(2));
            operations.splice(indexOfMul,1);
          } else if (operations.includes('/')) {
            let indexOfDiv = operations.indexOf('/');
            let division = ( indexOfDiv!=0 ? parseInt(numbers[indexOfDiv-1],2) : parseInt(numbers[indexOfDiv],2) ) / parseInt(numbers[indexOfDiv+1],2);
            numbers.splice(indexOfDiv,2);
            numbers.splice(indexOfDiv,0,division.toString(2));
            operations.splice(indexOfDiv,1);
          } else if (operations.includes('+')) {
            let indexOfSum = operations.indexOf('+');
            let sum = ( indexOfSum!=0 ? parseInt(numbers[indexOfSum-1],2) : parseInt(numbers[indexOfSum],2) ) + parseInt(numbers[indexOfSum+1],2);
            numbers.splice(indexOfSum,2);
            numbers.splice(indexOfSum,0,sum.toString(2));
            operations.splice(indexOfSum,1);
          } else {
            let indexOfSub = operations.indexOf('-');
            let sub = ( indexOfSub!=0 ? parseInt(numbers[indexOfSub-1],2) : parseInt(numbers[indexOfSub],2) )- parseInt(numbers[indexOfSub+1],2);
            numbers.splice(indexOfSub,2);
            numbers.splice(indexOfSub,0,sub.toString(2));
            operations.splice(indexOfSub,1);
          }  
        }
        res.innerHTML = numbers[0].toString(2);
      } else {
        alert("Line must ends with number.")
      }
    }