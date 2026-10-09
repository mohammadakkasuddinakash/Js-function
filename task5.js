function odd_even(number){
    let status;
    if(number % 2 === 0){
        status = `Even`;
    }
    else{
        status = `Odd`;
    }
    return status;
}

const result = odd_even(20);
console.log(result);



// ### Task-5 
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return `Even`. If odd return `Odd`