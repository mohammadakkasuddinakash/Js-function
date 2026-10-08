function count_zero(words){
    let count = 0;
    for(let word of words){
        if('0' === word){
            count = count + 1;
        }
    }
    return count;

}

const NoOfZero = count_zero('0011010111');
console.log(NoOfZero);

// ### Task-4  
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
