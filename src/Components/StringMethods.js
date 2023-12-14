//1. Write a JavaScript function to check whether an 'input' is a string or not.
const is_string=(input)=>{
    if(typeof(input)==="string"){
        return true
    }
    else{
        return false
    }
}
// console.log(is_string("w3resource"))
// console.log(is_string([1, 2, 4, 0]));

//2. Write a JavaScript function to check whether a string is blank or not.
const is_Blank =(input)=>{
    if(input.length==0){
        return true
    }
    else{
        return false    
    }
}
// console.log(is_Blank(''));
// console.log(is_Blank('abc'));

//3. Write a JavaScript function to split a string and convert it into an array of words.
const string_to_array=(input)=>{
    return input.split(" ")
  
}
// console.log(string_to_array("Robin Singh"));

//4. Write a JavaScript function to extract a specified number of characters from a string.
const truncate_string=(input)=>{
        return input.substring(0,4)
}
// console.log(truncate_string("Robin Singh",4));

//5. Write a JavaScript function to convert a string into abbreviated form.
const abbrev_name=(input)=>{
    return input.split(" ")[0]+ " " +input.substring(6,7)}
// console.log(abbrev_name("Robin Singh"));

//6. Write a JavaScript function that hides email addresses to prevent unauthorized access.
const protect_email=(input)=>{
        return input.substring(0,5)+"..."+input.slice(input.indexOf("@"))
}
// console.log(protect_email("robin_singh@example.com"));

//7. Write a JavaScript function to parameterize a string.
const string_parameterize=(input)=>{
    // const array=input.toLowerCase().split(" ").join("-")
    const array=input.toLowerCase().replace(/\s+/g, '-');//replacing spaces globally with "-"

    return array.slice(0,-1)
    // return input.toLowerCase().replace(/\s+/g, '-');
}
// console.log(string_parameterize("Robin Singh from USA."));

//8. Write a JavaScript function to capitalize the first letter of a string.
const capitalize = (input) => {
const array = input.split(" ");
for (let i = 0; i < array.length; i++) {
    array[i] = array[i][0].toUpperCase() + array[i].slice(1);
    console.log(array[i])
}
return array.join(' ');
};
// console.log(capitalize('js string exercises'));

//10. Write a JavaScript function that takes a string with both lowercase and upper case letters as a parameter. 
//It converts upper case letters to lower case, and lower case letters to upper case.
const swapcase=(input)=>{
    let array=input.split("")
    for(let i=0;i<array.length;i++){
        if(array[i]===array[i].toLowerCase() ){
            array[i]=array[i].toUpperCase()
        }
        else{
            array[i]=array[i].toLowerCase()
        }
    }
return array.join('')

// return input
// .split('')
// .map(char => (char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()))
// .join('');
}
// console.log(swapcase('AaBbc'));

//11. Write a JavaScript function to convert a string into camel case.
const camelize = (input) => {
const words = input.split(" ");
const camelCaseString = words.map((word, index) => {
    if (index === 0) {
    return word.toLowerCase();
    } else {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
});

return camelCaseString.join('');
};

// console.log(camelize("JavAScript exerciSes has BEen done Very welL"));

//12. Write a JavaScript function to uncommelize a string.
const uncamelize=(input,separator=" ")=>{
    for(let i=0;i<input.length;i++){
        if(input.charAt(i)!==input.charAt(i).toLowerCase()){
            return input.slice(0,i)+separator+input.slice(i)
        }
    }
}
// console.log(uncamelize('helloWorld'));

//13. Write a JavaScript function to concatenate a given string n times (default is 1).
const repeat=(input,b=1)=>{
    let result=''
    for(let i=0;i<b;i++){
        result+=input

    }
    return result//or
    // return input.repeat(b)
}
// console.log(repeat('Ha!',10));

//14. Write a JavaScript function to insert a string within a string at a particular position (default is 1).
const insert = (input, string="", position = 1) => {
  if (position === 1) {
    return string + input;
  } else {
    const add = input.substring(position);
    return input.slice(0, position) + string + add;
  }
};

// console.log(insert('We are doing some exercises.'));

//15. Write a JavaScript function that format a number in a human-readable string with the correct suffix, such as 1st, 2nd, 3rd, etc.
const humanize_format=(input)=>{
    const lastindex=input%10
    if (typeof(input) !== 'number' || isNaN(input)) {
        return 'Invalid input';
      }
    else if(lastindex===1 && input!==11){
        return input+"st"
    }
    else if(lastindex===2 && input!==12){
        return input+"nd"
    }
    else if(lastindex===3 && input!==13){
        return input+"rd"
    }
    else{
        return input+"th"
    }
}
// console.log(humanize_format("900"));


//16. Write a JavaScript function to truncate a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("...") (by default) or specified characters.
const text_truncate=(input,len,text="...")=>{
    let array =input.replace(/\s/g, "")
    if( typeof(input)==="string" && len===undefined || text===undefined){
        return input
    }
    else if(typeof(input)==="string" &&  array.length>len){
        return input.slice(0,len)+text
    }
    else{
        return "Invalid Input"
    }
}
// console.log(text_truncate('We are doing JS string exercises.',15,'!!'))

//17. Write a JavaScript function to chop a string into chunks of a given length.
const string_chop=(input,len=1)=>{
    if(len===1){
        return input.split(" ")
    }
    else {
        let array=[]
        for(let i=0;i<input.length;i+=len){
            array.push(input.slice(i,i+len))
        }
        return array
    }
}
// console.log(string_chop('w3resource',2));


//18. Write a JavaScript function to count substrings in a string.
const count=(input,sub)=>{
    let array =input.split(" ")
    let count=0;
    for(let i=0;i<array.length;i++){
        if(array[i].toLowerCase().includes(sub.toLowerCase())){
            count++
        }
    }
    return count
}
// console.log(count("The quick brown fox jumps over the lazy dog", 'the'));

//21. Write a JavaScript function to repeat a string for a specified time.
const repeat_string=(input,number)=>{
    if(number===undefined){
        return "Error in string or count"
    }
    let newString=''
    for(let i=0;i<number;i++){
        newString+=input
    }
    return newString
}
// console.log(repeat_string('a',30));

//23. Write a JavaScript function to strip leading and trailing spaces from a string.
const strip=(input)=>{
    return input.trim()//for removing leading and trailing spaves
    // return input.replace(/\s/g,"") for removing all the spaces

}
// console.log(strip(' w3resource'));

//24. Write a JavaScript function to truncate a string to a certain number of words.
const truncate=(input,number)=>{
    let array=input.split(" ")
    let array2=[]
    for(let i=0;i<number;i++){
            array2.push(array[i])
    }
    return array2.join(" ")
}
// console.log(truncate('The quick brown fox jumps over the lazy dog', 4));

//25. Write a JavaScript function to alphabetize a given string.(sorting a to z)
const alphabetize_string=(input)=>{
    return input.split("").sort().join("")

}
// console.log(alphabetize_string('United States'));

//26. Write a JavaScript function to remove the first occurrence of a given 'search string' from a string.
function remove_first_occurrence(str, searchstr)       {
	var index = str.indexOf(searchstr);
	if (index === -1) {
		return str;
	}
	return str.slice(0, index) + str.slice(index + searchstr.length+1);
}

// console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
function ascii_to_hexa(str)
  {
	var arr1 = [];
	for (var n = 0, l = str.length; n < l; n ++) 
     {
		var hex = Number(str.charCodeAt(n)).toString(16);
		arr1.push(hex);
	 }
	return arr1.join('');
   }

// console.log(ascii_to_hexa('12'));3132
// console.log(ascii_to_hexa('100'));313030

//29. Write a JavaScript function to find a word within a string.
const search_word=(input,word)=>{
    const array = input.split(/\W+/).filter(Boolean);
    console.log(array)
    let count=0;
    for(let i=0;i<array.length;i++){
        if(array[i]===word){
            count++
        }
    }
    return `${word} was found ${count} times`
}
// console.log(search_word('aa, bb, cc, dd, aa', 'aa'));


//30. Write a JavaScript function that checks whether a string ends with a specified suffix.
const string_endsWith=(input,string)=>{
    const array = input.split(" ")
    let index=input.indexOf(string)
if(array[array.length-1]===input.slice(index)){
        return true
}
else{
     return false
}//or
// return input.endsWith(string)

}

// console.log(string_endsWith('JS PHP PYTHON','PYTHON'));

//  32. Write a JavaScript function to remove non-printable ASCII characters.
const remove_non_ascii = (input) => {
    return input.replace(/[^\x20-\x7E]/g, ''); // Matches any character outside the printable ASCII range
};

// console.log(remove_non_ascii('???????PHP-MySQL??????'));

// 33. Write a JavaScript function to remove non-word characters.

const remove_non_word = (input) => {
    return input.replace(/[^\w\s-]/g, ''); // Matches any character that is not a word character, space, or hyphen
};

// console.log(remove_non_word('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL'));

//34. Write a JavaScript function to convert a string to title case.
const sentenceCase=(input)=>{
        const array = input.split(" ")
        const newArray=[]
        for(let i=0;i<array.length;i++){
            
            var word= (array[i].toLowerCase().charAt(0).toUpperCase())+array[i].toLowerCase().slice(1)
            newArray.push(word)
        }

    return newArray.join(" ")
}
// console.log(sentenceCase('PHP exercises. python exercises.'));

//37. Write a JavaScript function to test case-insensitive (except special Unicode characters) string comparison.
const compare_strings=(str1,str2)=>{
        if(str1.toLowerCase()===str2.toLowerCase()){
            return true
        }
        else{
            return false
        }//or
        // return str1.toLowerCase() === str2.toLowerCase();

}
// console.log(compare_strings('ABCD', 'Abce'));

//38. Write a JavaScript function to create a case-insensitive search.
const case_insensitive_search=(input,string)=>{
    const array=input.split(" ")
    for(let i=0;i<array.length;i++){
        if(array[i].toLowerCase()===string.toLowerCase()){
            return "Matched"
        }
    }
    return "Not Matched"

}
// console.log(case_insensitive_search('JavaScript Exercises', 'exercises'));

//40. Write a JavaScript function to uncapitalize the first letter of each word of a string.
const unCapitalize_Words=(input)=>{
    const array=input.split(" ")
    let newArray=[]
    for(let i=0;i<array.length;i++){
        let word=array[i].charAt(0).toLowerCase() +array[i].slice(1)
        newArray.push(word)
    }
    return newArray.join(" ")
}
// console.log(unCapitalize_Words('Js String Exercises'));

//43. Write a JavaScript function to test whether the character at the index provided is upper case.
const isUpperCaseAt = (input, index) => {
    if (index >= 0 && index < input.length) {
        return input.charAt(index) === input.charAt(index).toUpperCase();
    } else {
        // Handle out-of-bounds index
        return false;
    }
};

// console.log(isUpperCaseAt('JS STRING EXERCISES', 1));


//46. Write a JavaScript function to test whether a string starts with a specified string.
const startsWith=(input,str)=>{
    return input.startsWith(str)

}
// console.log(startsWith('js string exercises', 'js'));

//to print alphabets
for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
    const currentChar = String.fromCharCode(i);
    // console.log(currentChar);
}


//48. Write a JavaScript function to get the successor to a string.
const getSuccessor = (input) => {
    const codePoints = [...input].map(char => char.codePointAt(0));
    console.log(codePoints)
    
    // Increment the code point of the last character
    codePoints[codePoints.length - 1]++;

    // Convert the updated code points back to a string
    const successorString = String.fromCodePoint(...codePoints);

    return successorString;
};

// Example usage
const originalString = 'abcdefghij';
const successor = getSuccessor(originalString);

console.log(`Successor to "${originalString}" is "${successor}"`);




