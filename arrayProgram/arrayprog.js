//Write a program in the following steps
//a. Generates 10 Random 3 Digit number.
//b. Store this random numbers into a array.
//c. Then find the 2nd largest and the 2nd smallest element without sorting the array.

function generateRandomArray(count){
    let array = [];

    for(let i=0;i<count;i++){
       let random = Math.floor(Math.random() * 90) + 10;
       array.push(random)
    }

    return array;
}

function findSecondLargestAndSmallestWithoutSort(array){
    let largest = array[0];
    let secondLargest =  array[0];
    let smallest = array[0];
    let secondSmallest =  array[0];

    for(let i=2;i<array.length;i++){
        if(array[i] > largest){
            secondLargest = largest;
            largest = array[i]
        } else if( array[i] > secondLargest && largest != array[i]){
            secondLargest = array[i];
        }

        if(array[i] < smallest){
            secondSmallest = smallest;
            smallest = array[i]
        } else if( array[i] < secondSmallest && smallest != array[i]){
            secondSmallest = array[i];
        }
    }

    console.log("Second largest is " + secondLargest);
    console.log("Second smallest is " + secondSmallest);
}

let arr = generateRandomArray(10);
console.log(arr)

findSecondLargestAndSmallestWithoutSort(arr);

// Extend the above program to sort the array and then find the 2nd largest and the 2nd smallest element.

function findSecondLargestAndSmallestWithSort(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j] > arr[j+1]){
                swap = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = swap;
            }
        }
    }

    console.log("Second largest is " + arr[arr.length-2]);
    console.log("Second smallest is " + arr[1]);
}

arr = generateRandomArray(10);
console.log(arr)

findSecondLargestAndSmallestWithoutSort(arr);

//Extend the Prime Factorization Program to store all the Prime Factors of a number n into an array and finally display the output.

function checkPrime(num){
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num %i ===0 ) return false;
    }

    return true;
}

function getPrimeFactorsInArray(num){
    let array = []
    for(let i=2;i<num/2;i++){
        if( num % i ===0 && checkPrime(i)){
           array.push(i)
        }
    }

    console.log("prime factors are")
    console.log(array)
}

getPrimeFactorsInArray(52)

// Take a range from 0 – 100, find the digits that are repeated twice like 33, 77, etc and store them in an array

function storeTwiceDigits(){
    let array = [];
    for(let i=1;i<=100;i++ ){
       if(i%11 === 0){
        array.push(i);
       }
    }

    console.log("twice digits are ")
    console.log(array)
}

storeTwiceDigits();