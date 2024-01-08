//1. Write a JavaScript function to check whether an `input` is an array or not.
const is_array=(input)=>{
    return Array.isArray(input)
}
// console.log(is_array('w3resource'));

//3. Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
const first=(input,count=1)=>{
    let newArray=[]
     for(let i=0;i<count;i++){
        if(Array.isArray(input)===true){
        if(count >input.length){
            return input
        }
        else{
            newArray.push(input[i])
        }
    }
     }
     return newArray;
}
// console.log(first([7, 9, 0, -2],6));

//4 min number in a array
function findMinUsingForLoop(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    // console.log("Minimum number using for loop:", min);
}


// Example usage:
let numbers = [5, 2, 9, 1, 7];
findMinUsingForLoop(numbers);

//4. Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
const last =(input,count=1)=>{
    let newArray=[]
    for(let i=input.length-1;i>=input.length-count;i--){
       if(Array.isArray(input)===true){
       if(count >input.length){
           return input
       }
       else {
           newArray.push(input[i])
       }
   }
    }
    return newArray.reverse();
}
// console.log(last([7, 9, 0, -2],3));

//5. Write a simple JavaScript program to join all elements of the following array into a string.
const myColor=(input)=>{
    return input.join("+")
}
// console.log(myColor(["Red", "Green", "White", "Black"]))

//6. Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.

const evenDash = (input) => {
    const inputString = input.toString();
    let result = inputString[0];

    for (let i = 1; i < inputString.length; i++) {
        const currentDigit = parseInt(inputString[i]);
        const previousDigit = parseInt(inputString[i - 1]);

        if (currentDigit % 2 === 0 && previousDigit % 2 === 0) {
            result += '-' + currentDigit;
        } else {
            result += currentDigit;
        }
    }

    return result;
}

// console.log(evenDash(425467)); // Output: 0-254-6-8

//7. Write a JavaScript program to sort the items of an array.
const sortArray=(input)=>{
    // let Array=input.sort(); output=-3,-4,1,10,2,3,4,5,6,7,8//incorrect sorting
    let Array=input.sort((a,b)=>a-b); //output=-4,-3,1,2,3,4,5,6,7,8,10 //if we add {} braces inside the comparision function return statement should be added
    return Array.toString()

}
// console.log(sortArray( [ -3, 8,4 ,10,7, 6, 5, -4, 3, 2, 1 ]))


/*
sort() is a method in JavaScript that is used to sort the elements of an array. By default, the sort() method sorts the elements as strings, which may not produce the correct order for numeric values. For example, without a compare function, the array [10, 2, 5, 1] would be sorted as 1, 10, 2, 5 because the default sorting is lexicographic (dictionary) order.

On the other hand, sort((a, b) => a - b) is a version of the sort() method with a compare function. This compare function is used to determine the order of elements in the sorted array. The function takes two parameters, typically named a and b, representing two elements being compared. The function should return a negative, zero, or positive value, indicating the desired order:

If the compare function returns a negative value, a comes before b.
If the compare function returns a positive value, b comes before a.
If the compare function returns zero, the order of a and b remains unchanged.
The specific compare function a - b is commonly used for sorting in ascending numerical order. If you want to sort in descending order, you can use b - a.


const numbers = [10, 2, 5, 1];

// Using sort() without a compare function (incorrect)
const incorrectSorted = numbers.sort();
console.log(incorrectSorted); // Output: [1, 10, 2, 5]

// Using sort((a, b) => a - b) with a compare function (correct)
const correctSorted = numbers.sort((a, b) => a - b);
console.log(correctSorted); // Output: [1, 2, 5, 10]

*/

//8. Write a JavaScript program to find the most frequent item in an array.
const frequentItem = (input) => {
    let maxCount = 0;
    let mostFrequentItem;

    for (let i = 0; i < input.length; i++) {
        let currentItem = input[i];
        let count = 0;

        // Check if the item is already counted
        for (let j = 0; j < input.length; j++) {
            if (input[j] === currentItem) {
                count++;
            }
        }

        // Update maxCount and mostFrequentItem if necessary
        if (count > maxCount) {
            maxCount = count;
            mostFrequentItem = currentItem;
        }
    }

    return mostFrequentItem + " (" + maxCount + " times)";
}

// console.log(frequentItem([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));

//9. Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
const swapCase = (input) => {
    let result = '';
    for (let i = 0; i < input.length; i++) {
        if (input[i].toLowerCase() === input[i]) {
            result += input[i].toUpperCase();
        } else {
            result += input[i].toLowerCase();
        }
    }
    return result;
    // return input.split('').map(char => {
    //     return char.toLowerCase() === char ? char.toUpperCase() : char.toLowerCase();
    // }).join('');
}

// console.log(swapCase('tHE qUICK bROWN fOX'));

//10. Write a JavaScript program that prints the elements of the nested array.
const printElements = (input) => {
    let result = "";
    for (let i = 0; i < input.length; i++) {
        result += "index " + i + " elements are\n";

        for (let j = 0; j < input[i].length; j++) {
            result += " " + input[i][j] + "\n";
        }

        result += "------\n";
    }

    return result;
}

// console.log(printElements([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]));

//or
// a sample 2-D array 
// const a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
 
// for (const i in a) 
// {
//    console.log(`row ${i}`);
//    for (const j in a[i]) 
//      {
//       console.log(` ${a[i][j]}`);
//      }
// }

//11. Write a JavaScript program to find the sum of squares of a numerical vector.

const sum_sq=(input)=>{
    let sum=0
    // return input.map((element)=>{
    //     return element*element
    // }).reduce((a,b)=>{
    //     return a+b
    // })
    return input.reduce((a,b)=>{
        console.log(a)
        return a+b*b
    },0)
}
// console.log(sum_sq([0,1,2,3,4])); 

/*
Iteration 1: a is 0 (initial value), so console.log(a) prints 0.
Iteration 2: a is 0 + 0*0 (accumulated sum of squares so far), so console.log(a) prints 0.
Iteration 3: a is 0 + 1*1 (accumulated sum of squares so far), so console.log(a) prints 1.
Iteration 4: a is 1 + 2*2 (accumulated sum of squares so far), so console.log(a) prints 5.
Iteration 5: a is 5 + 3*3 (accumulated sum of squares so far), so console.log(a) prints 14.----16
*/

//12. Write a JavaScript program to compute the sum and product of an array of integers.
const array=[1,2,3,4,5,6,7]
const result=array.reduce((a,b)=>{
    return {add:a.add+b,prod:a.prod*b}
},{add:0,prod:1})
// console.log(result)

const sum_prod=(input)=>{
    // let sum=0;
    // let prodict=1;
    // for(let i=0;i<input.length;i++){
    //     sum+=input[i]
    //     prodict*=input[i]
    // }
    // return `sum =${sum}\nproduct=${prodict}`
    //above using reduce
    // return input.reduce((a,b)=>{
    //     let sum=a.sum+b;
    //     let product=a.product*b;
    //     return {sum,product}
    // },{sum:0,product:1})//use array also no problem
    return input.reduce((a,b)=>{
        let sum=a[0]+b;
        let product=a[1]*b;
        return [sum,product]
    },[0,1])//use array also no problem
}
// console.log(sum_prod([1,2,3]))

const remove_dup = (input) => {
    let newArray = [];
    for (let i = 0; i < input.length; i++) {
        let currentItem = input[i];
        if (newArray.includes(currentItem)===false) {//checking whether the currentItem is not present in newArray
            newArray.push(currentItem);
        }
    }
    return newArray;//or
    // return [...new Set(input)];

}
//using reduce
// const removeDupReduce = (input) => {
//     return input.reduce((uniqueArray, currentItem) => {
//         if (!uniqueArray.includes(currentItem)) {
//             uniqueArray.push(currentItem);
//         }
//         return uniqueArray;
//     }, []);
// }

// console.log(removeDupReduce([1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6]));

//using foreach
// const removeDupForEach = (input) => {
//     let uniqueArray = [];
//     input.forEach((currentItem) => {
//         if (!uniqueArray.includes(currentItem)) {
//             uniqueArray.push(currentItem);
//         }
//     });
//     return uniqueArray;
// }

// console.log(removeDupForEach([1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6]));


// console.log(remove_dup([1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6]));

//Write a JavaScript program to display the colors in the following way :
"1st choice is Blue ."
"2nd choice is Green."
"3rd choice is Red."
const display_color = (input) => {
    for (let i = 0; i < input.length; i++) {
        const lastindex = (i + 1) % 10;

        if (lastindex === 1) {
            console.log((i + 1) + "st choice is " + input[i]);
        } else if (lastindex === 2) {
            console.log((i + 1) + "nd choice is " + input[i]);
        } else if (lastindex === 3) {
            console.log((i + 1) + "rd choice is " + input[i]);
        } else {
            console.log((i + 1) + "th choice is " + input[i]);
        }
    }
}

// display_color(["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"]);

//16. Write a JavaScript program to find the leap years in a given range of years.
const leapYear=(startYear,endYear)=>{
        let leapyears=[];
        for(let i=startYear;i<=endYear;i++){
            if ((i % 4 === 0 && i % 100 !== 0) || (i % 400 === 0)) {
                leapyears.push(i)
            }
        }
        return leapyears;
}
// console.log(leapYear(2000,2020))

//17. Write a JavaScript program to shuffle an array.
const shuffleArray = (inputArray) => {
    for (let i = inputArray.length - 1; i > 0; i--) {
        const j = Math.ceil(Math.random() * (i + 1));
        // Swap elements at positions i and j
        [inputArray[i], inputArray[j]] = [inputArray[j], inputArray[i]];
    }
    return inputArray;
}

const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const shuffledArray = shuffleArray([...originalArray]);

// console.log("Original Array:", originalArray);
// console.log("Shuffled Array:", shuffledArray);

//19. There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.
const sumOfIndex = (array1, array2) => {
    let newArray = [];

    for (let i = 0; i < Math.min(array1.length, array2.length); i++) {
        newArray.push(array1[i] + array2[i]);
    }

    return newArray;
    // return array1.slice(0,array1.length).map((a,b)=>{//if we are using forEach we should push in newArray as forEach  operation will not return any new array
    //     return a+array2[b]
    // })
}

// const resultArray = sumOfIndex([1, 2, 3, 5], [0, 2, 4, 7]);
// console.log("Sum of each individual index value:", resultArray);

//21.***** Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened to a single level.
const flattenArray = (arr, shallow = false) => {
    let flattenedArray = [];

    arr.forEach((element) => {
        if (Array.isArray(element) && !shallow) {
            // Recursively flatten nested arrays
            flattenedArray = flattenedArray.concat(flattenArray(element));
        } else {
            // Add non-array elements or shallow flattening
            flattenedArray.push(element);
        }
    });

    return flattenedArray;
};

// Example usage:
const nestedArray = [1, [2, [3, 4], 5], [6, [7, 8]]];
const flattenedSingleLevel = flattenArray(nestedArray, true);
const flattenedAnyDepth = flattenArray(nestedArray);

// console.log("Flattened to a single level:", flattenedSingleLevel);
// console.log("Flattened to any depth:", flattenedAnyDepth);

//22. Write a JavaScript program to compute the union of two arrays.
const union=(array1,array2)=>{
    // let newArray=[]
    // for(let i=0;i<array1.length;i++){
    //     let currentItem=array[i]
    //     if(!newArray.includes(currentItem)){
    //         newArray.push(currentItem)
    //     }
    //     for(let j=0;j<array2.length;j++){
    //         let currentItem2=array2[j]
    //         if(!newArray.includes(currentItem2)){
    //             newArray.push(currentItem2)
    //         }
    //     }
    // }
    // return newArray.sort((a,b)=>a-b);

    let arr5=[...array1,...array2]
    let arr6=[...new Set(arr5)]
    return arr6
}
// console.log(union([1, 2, 3], [100, 2, 1, 10,34,2,567]));

//fibronicci series
const fibonacci = (input) => {
    if (input <= 0) {
        return [0];
    } else if (input === 1) {
        return [0, 1];
    }

    let initialArray = [0, 1];

    // for (let i = 0; i <= input - initialArray.length; i++) {
    //     initialArray.push(initialArray[i] + initialArray[i + 1]);
    // }
    do(initialArray.push(initialArray[initialArray.length - 2] + initialArray[initialArray.length - 1]))
    while (initialArray.length < input) 

    return initialArray.join(",");
};
// console.log(fibonacci(10));

//23. Write a JavaScript function to find the difference between two arrays.
const difference = (array1, array2) => {
    const diff1 = [... new Set(array1)].filter(element => !array2.includes(element));
    console.log(diff1)
  
    const diff2 = [... new Set(array2)].filter(element => !array1.includes(element));
    console.log(diff2)
  
    const result = diff1.concat(diff2);
  
    return result;
  };
  
//   console.log(difference([1, 2,2,4,4,3], [100, 2, 1, 10]));

//24. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
const removeFalsyValues = (input) => {
    let newArray = [];

    for (let i = 0; i < input.length; i++) {
        if (
            input[i] !== null &&
            input[i] !== 0 &&
            input[i] !== "" &&
            input[i] !== false &&
            input[i] !== undefined &&
            !isNaN(input[i])
        ) {
            newArray.push(input[i]);
        }
    }

    return newArray;
};

// console.log(removeFalsyValues([NaN, 0, 15, false, -22, '', undefined, 47, null]));

//26. Write a JavaScript program to find a pair of elements (indices of the two numbers) in a given array whose sum equals a specific target number.

const findPair=(input,target)=>{
    for(let i=0;i<input.length;i++){
        if((input[i]+input[i+1])===target){
                return [i,i+1]
        }
        else{
            return "pair not found"
        }
    }
    
}
// console.log(findPair([10,20,10,0,50,60,70],130 ))

//27. Write a JavaScript function to retrieve the value of a given property from all elements in an array.
const retrieve = (input) => {
    let newArray = [];

    for (let i = 0; i < input.length; i++) {
        if (typeof input[i] === "number" && !isNaN(input[i]) && input[i] !== 0) {
            newArray.push(input[i]);
        }
    }

    return newArray;
};

// console.log(retrieve([NaN, 0, 15, false, -22, '', undefined, 47, null]));

//29. Write a JavaScript function to fill an array with values (numeric, string with one character) within supplied bounds.

const num_string_range=(a,b,span)=>{
    let alphabets=[]
    for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
        alphabets.push(String.fromCharCode(i))
        
    }
    let newArray=[]
    for(let i=0;i<alphabets.length;i+=span){
        newArray.push(alphabets[i])
    }
    return newArray

}
// console.log(num_string_range('a', "z", 2));

//30. Write a JavaScript function that merges two arrays and removes all duplicate elements.

const merge=(a,b)=>{
    return[...new Set( [...a,...b])]

}
// console.log(merge([1,2,3],[2,930,1]))

//31. Write a JavaScript function to remove a specific element from an array.
const remove_element=(array,element)=>{
    for(let i=0;i<array.length;i++){
        if(array[i]===element){
            return array.filter((a)=>{
                return a!==element
            })
        }
    }

}
//using reduce
// const removeElementReduce = (array, element) => {
//     return array.reduce((acc, current) => {
//         if (current !== element) {
//             acc.push(current);
//         }
//         return acc;
//     }, []);
// };

//using splice
// const array = [2, 5, 9, 6];
// const elementToRemove = 5;

// const index = array.indexOf(elementToRemove);

// if (index !== -1) {
//     // Remove the element at the specified index
//     array.splice(index, 1);
// }

// console.log(array); // Output: [2, 9, 6]


// console.log(remove_element([2, 5, 9, 6], 5))

//32. Write a JavaScript function to find an array containing a specific element.
const contains=(arr,b)=>{
    for(let i=0;i<arr.length;i++){
        if(arr[i]===b){
            return [true]
        }
    }
    return [false]
}

// console.log(contains([2,5,9,6,89], 5));

//34. Write a JavaScript function to get the nth largest element from an unsorted array.
const nthLargest = (array, n) => {
    if (n > 0 && n <= array.length) {
        const sortedArray = array.slice().sort((a, b) => b - a); // Create a sorted copy by slice and then  in descending order
        console.log(sortedArray)
        return sortedArray[n - 1];
    } else {
        return "Invalid value of n";
    }
};

// console.log(nthLargest([43, 56, 23, 89, 88, 90, 99, 652], 3));

//35. Write a JavaScript function to get random items from an array.

const random_element=(input)=>{
   let index=Math.floor((Math.random()*input.length))
   return input[index]
}
// console.log(random_element([1,2,3,4,5,6,7,8]))

//36. Write a JavaScript function to create a specified number of elements with a pre-filled numeric value array.
const array_filled=(input,length)=>{
    let array=[]
    for(let i=0;i<input;i++){
        array.push(length)
    }
    return array
}
// console.log(array_filled(6, 0));

//37. Write a JavaScript function to create a specified number of elements with a pre-filled string value array.
const arrayfilled=(input,string)=>{
    let array=[]
    for(let i=0;i<input;i++){
        array.push(string)
    }
    return array
}
// console.log(arrayfilled(3, 'default value'));

//38. Write a JavaScript function to move an array element from one position to another.
const move=(input,index1,index2)=>{
    input[index1]=input[index2]
    return input

}
// console.log(move([10, 20, 30, 40, 50], 0, 2));

//39. Write a JavaScript function to filter false, null, 0 and blank values from an array.
const filter_array_values=(input)=>{
    let array=[]
    for(let i=0;i<input.length;i++){
        if( input[i]!==0 && input[i]!==null && input[i]!=="" && input[i]!==false ){
            array.push(input[i])
        }
    }
    return array
}
// console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));

// Write a JavaScript function to generate an array of integer numbers, increasing one from the starting position, of a specified length.
const array_range=(a,b)=>{
    let array=[]
    for(let i=a;i<=b;i++){
        array.push(i)
    }
    return array
}
// console.log(array_range(1, 4));

 

// console.log(unzip([['a', 1, true], ['b', 2, false]]));
// console.log(unzip([['a', 1, true], ['b', 2]]));

//45. Write a JavaScript program to find all the unique values in a set of numbers.
const uniqueNumbers = (array) => {
    return [...new Set(array)];
};

// console.log(uniqueNumbers([1, 2, 2, 3, 4, 4, 5]));

//46. Write a JavaScript program to generate all permutations of an array's elements (including duplicates).

const permutations = (input) => {
    const result = [];

    const permute = (arr, current = []) => {
        if (arr.length === 0) {
            result.push([...current]);
            return;
        }

        for (let i = 0; i < arr.length; i++) {
            const remaining = [...arr.slice(0, i), ...arr.slice(i + 1)];
            current.push(arr[i]);
            permute(remaining, current);
            current.pop();
        }
    };

    permute(input);

    return result;
};

console.log(permutations([1, 33, 5]));

