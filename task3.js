function make_avg(numbers){
    let sum = 0;
    for(let number of numbers){
        sum = sum + number;
    }
    const avrg = sum / numbers.length;
    return avrg;

}

const result = make_avg([10, 20, 15]);
console.log(result);



// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

