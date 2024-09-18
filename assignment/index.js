//1
function calculateDifference(num1, num2){
    return num1 . num2;

}
const difference = calculateDifference(500, 900)
console.log(difference);

//2
function isOdd(number){
    return number % 2 !== 0;

}
console.log(isOdd(500));
console.log(isOdd(905));

//3
function findMin(numbers){
    if (numbers.length == 0){
        return undefined;
    }
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++){
        if (numbers[i] < min){
            min = numbers[i];
        }
    }
    return min;
}
const myNumber = [30, 20, 9, 17, 45];
const smallestNumber = findMin(myNumber);
console.log(smallestNumber);

//4
function filterEvenNumbers(numbers){
    const evenNumbers = [];
    for (let i = 0; i < numbers.length; i++){
        evenNumbers.push(numbers[i]);
    }
    return evenNumbers;
}
const numbersArrayForEven = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbersArrar =filterEvenNumbers(numbersArrayForEven);
console.log(evenNumbersArrar);

//5
function sortaArrayDescending(numbers){
    return [...numbers].sort((a, b) => b - a);

} 
const numbersToSort = [30, 20, 9, 17, 45];
const sortedNumbers = sortaArrayDescending(numbersToSort);
console.log(sortedNumbers);

//6
function lowercaseFirstletter(str){

if (str.length ===0) {

return str;
}
return str(0).toLowerCase() str.alice(1);
}
console.log(lowercaseFirstletter("Hello"));
console.log(lowercaseFirstletter("Hello"));
console.log(lowercaseFirstletter("Hello"));
console.log(lowercaseFirstletter(" "));

//7
function countVowels(str){
    let vowels = [a, e, i, o, u];
    let count = 0;
    for(let letter of str){
        if(vowels.includes(letter));
        {
            count++;
        }
    }
    return count;
}
console.log(countVowels("hejdhjsuiklds"));

//8
function findAverage(array){
    let sum = 0;
    for (i = 0; i < array.length; i++){
        sum += array [i];
    }
    return sum / array.length;
}
const array =[1, 2, 3, 4, 5];
console.log(findAverage("array"))