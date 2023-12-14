//1

const data=100;
console.log(data.toString(),"1")//100
// console.log(100.toString(),"2")//invalid or unexpected token
console.log((100).toString(),"3")//100
console.log(100..toString(),"3")//100

//2

let num=20;
console.log(num+"20")//2020
console.log(++num)//21

//3

function magic(){
    return hello=1000// hello will get declared as global scope
}
console.log(magic())//1000

//4

let person={name:"shiva"}//already stored in memory
const members=[person]//already stored in memory
person=null//
console.log(person)//null
members[0].class=12
console.log(members)//[ { name: 'shiva', class: 12 } ]

//5

const isnumberEqual=108==["108"]
//== works on a set of algorithm through which ever value compared is not same type(like object
//or array),js will convert it into string and then into Number
//["108"].toString()
//Number("108")
console.log(isnumberEqual)//true

//6 let vs var vs const

/*
var is function-scoped, meaning its scope is limited to the function in which it is declared. 
If declared outside any function, it becomes a global variable.

var is hoisted, which means the variable is moved to the top of its scope during the compilation phase. 
However, only the declaration is hoisted, not the initialization.
var variables can be re-declared and updated.
*/
function exampleVar() {
    if (true) {
        var x = 10;
        console.log(x); // Output: 10
    }
    console.log(x); // Output: 10 (accessible outside the block due to function scope)
}

/*
let is block-scoped, meaning its scope is limited to the block (enclosed by curly braces) in which it is declared.
let is hoisted, but unlike var, the variable is not initialized until the declaration statement is encountered during execution. This is known as the "temporal dead zone."
let variables can be updated but not re-declared in the same scope.
*/

function exampleLet() {
    if (true) {
        let y = 20;
        console.log(y); // Output: 20
    }
    // console.log(y); // Error: y is not defined (outside the block)
}

/*
const is also block-scoped like let.
Variables declared with const must be initialized at the time of declaration,
 and their value cannot be changed once assigned (immutable).
const is also hoisted, but like let, it's not initialized until the declaration statement is encountered during execution.
*/
function exampleConst() {
    const z = 30;
    // z = 40; // Error: Assignment to a constant variable
    console.log(z); // Output: 30
}

/*
Use var when you need function scope (or global scope) and are okay with hoisting and potential re-declaration.
Use let when you need block scope and the ability to update the variable.
Use const when you need block scope and a variable that won't be reassigned.
*/


//7
console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5


//8

console.log(y); // Error: Cannot access 'y' before initialization
let y = 10;
console.log(y); // Output: 10


//9 sort an array
console.log([1,67,89,32,45,12,9,10].sort())//internally convert numbers to utf18 and compare them
([1,67,89,32,45,12,9,10].sort((a,b)=>{a-b}))

//10 flat an array
const nestedArray = [1, [2, [3, [4, [5, [6, [7]]]]]]];
const flattenedString = nestedArray.toString(); // "1,2,3,4,5,6,7"
const result = Number(flattenedString);
console.log(nestedArray.flat())//[ 1, 2, [ 3, [ 4, [Array] ] ] ] not works when its nested array
console.log(result); // Output: NaN
//if we want the output of all numbers in array we should use recursive method

function flattenArrayAndExtractNumbers(arr) {
    // The function takes an array as a parameter.

    return arr.reduce((result, current) => {
        // The reduce function is used to iterate over the elements of the array.
        // 'result' is the accumulator that stores the final result, and 'current' is the current element being processed.

        if (Array.isArray(current)) {
            // If the current element is an array, recursively call the function to flatten it.
            result = result.concat(flattenArrayAndExtractNumbers(current));
        } else if (!isNaN(current)) {
            // If the current element is a number (checked using isNaN), add it to the result array.
            result.push(Number(current));
        }

        return result;
    }, []);
    // The initial value of the accumulator is an empty array.
    // The result is an array containing all the extracted numbers from the nested array.
}

const numbersArray = flattenArrayAndExtractNumbers(nestedArray);

console.log(numbersArray);//[1, 2, 3, 4, 5, 6, 7]


//11parseInt

console.log(parseInt("108"))//108
console.log(parseInt("108*200"))//108
console.log(parseInt("108Wonder"))//108
//js will ignore whichever part is there after number,and convert into number

//12
const entries = [['a', 1], ['b', 2], ['c', 3]];

const obj = entries.reduce((acc, [key, value]) => {
  acc[key] = value;
  return acc;
}, {});

console.log(obj);
// Output: { a: 1, b: 2, c: 3 }

//13 event loop

/*
JavaScript is Single-Threaded:

JavaScript is a single-threaded language, meaning it executes one operation at a time in a sequence.
Asynchronous Operations:

In web development, we often deal with tasks that take time, like fetching data from a server or reading a file. If we waited for these tasks to finish, the whole program would freeze.
Event Loop to the Rescue:

The event loop is like the traffic cop of JavaScript. It helps manage these time-consuming tasks without freezing the entire program.
How it Works:

When you start an asynchronous task (like fetching data), JavaScript doesn't wait around. It continues with the next tasks in line.
When the asynchronous task completes, a message about its completion gets in line for the event loop.
Message Queue:

The event loop has a "to-do list" called the message queue. It holds messages (like task completion) that need attention.
Checking the Queue:

The event loop constantly checks the message queue. If it sees a message, it takes it and executes the associated task or function.
Example:

Imagine you click a button triggering a function to fetch data. Instead of freezing, the program continues. When the data is ready, a message is added to the queue.
The event loop sees this message, executes the code related to the fetched data, and updates the webpage.
Non-Blocking Magic:

The event loop allows JavaScript to do many things at once (concurrent tasks) without waiting for each one to finish.
In a nutshell, the event loop is JavaScript's way of handling tasks efficiently. It lets the program keep going even when waiting for something to happen,
 and when that something does happen, the event loop ensures it's taken care of. This is crucial for building responsive and interactive applications.
*/

//14 shallow copy vs deep copy

/*
Shallow Copy:

A shallow copy creates a new object or array, but it doesn't create copies of nested objects or arrays. Instead, it copies references to the original nested objects or arrays.
Changes made to the nested objects or arrays inside the shallow copy will affect the original object, and vice versa.
Shallow copy methods include Object.assign(), the spread operator (...), and the Array.from() method.
Example:

javascript
Copy code
const originalArray = [1, 2, [3, 4]];

// Shallow copy using spread operator
const shallowCopy = [...originalArray];

// Modifying the nested array in the shallow copy
shallowCopy[2][0] = 99;

console.log(originalArray); // [1, 2, [99, 4]]
Deep Copy:

A deep copy creates a completely independent copy of the original object or array, including all nested objects or arrays. Changes made to the deep copy do not affect the original, and vice versa.
Achieving a deep copy is more involved, as you need to recursively copy all nested structures. Libraries like Lodash provide _.cloneDeep() for this purpose.
It's important to note that deep copying can be resource-intensive, especially for complex objects with many levels of nesting.
Example:

javascript
Copy code
const originalArray = [1, 2, [3, 4]];

// Deep copy using JSON methods (Note: Limited to JSON-safe data)
const deepCopy = JSON.parse(JSON.stringify(originalArray));

// Modifying the nested array in the deep copy
deepCopy[2][0] = 99;

console.log(originalArray); // [1, 2, [3, 4]]
*/

//explain how we will achieve componentdidmount,componentdidupdate,componentwillunmount in functional component

//

/*
User
explain the content flow when a client hits a browser like google.com

ChatGPT
When a client (a user's device, such as a computer or smartphone) requests a website, such as Google.com, a series of steps occur to deliver the content to the user's browser. Below is a simplified explanation of the content flow when a client hits a browser like Google.com:

DNS Resolution:

The user enters "google.com" in the browser.
The browser needs to find the IP address of the server hosting Google.com, so it performs a Domain Name System (DNS) resolution.
The DNS server returns the IP address associated with Google.com.
Initiating a Connection:

The browser uses the obtained IP address to establish a connection to the server.
The connection is initiated using the Hypertext Transfer Protocol (HTTP) or its secure version, HTTPS.
HTTP/HTTPS Handshake:

If the connection is over HTTPS, there is a secure handshake between the browser and the server to establish a secure connection using SSL/TLS.
Sending an HTTP Request:

The browser sends an HTTP request to the server for the content of Google.com. This request includes information about the browser, supported content types, and any cookies.
Server Processing:

The server processes the request. In Google's case, it might involve handling search queries or other user requests.
Generating a Response:

The server generates an HTTP response containing the requested content. For Google.com, this would include the search results page.
Sending the Response:

The server sends the HTTP response back to the client.
Browser Processing:

The browser receives the response and starts processing it.
If the response includes HTML, the browser parses the HTML to construct the Document Object Model (DOM).
Rendering the Page:

The browser renders the page based on the DOM, interpreting CSS for styling and executing JavaScript for dynamic content.
Fetching Additional Resources:

The browser might need to fetch additional resources such as images, stylesheets, or scripts referenced in the HTML.
Rendering Complete:

The browser completes rendering the page, and the user can interact with the displayed content.
It's important to note that many modern websites, including Google.com, use various optimizations, content delivery networks (CDNs), and caching mechanisms to improve performance and reduce latency. The entire process is designed to be efficient, ensuring a seamless and fast user experience.

User
tell the flow of html css and js
The flow of HTML, CSS, and JavaScript in web development involves the creation and presentation of web pages. Here's a high-level overview of how these technologies work together:

HTML (HyperText Markup Language):

Structure: HTML provides the basic structure of a web page. It consists of elements, such as headings, paragraphs, images, links, forms, and more.
Markup: Developers use HTML tags to define the different parts of a web page. Tags enclose content and provide information about its structure.
Static Content: HTML is primarily responsible for static content and the overall document structure.
CSS (Cascading Style Sheets):

Presentation: CSS is used for styling and presentation of HTML content. It allows you to define how HTML elements should be displayed on the screen.
Selectors and Rules: CSS uses selectors to target HTML elements and rules to define the style properties (e.g., color, font, layout) for those elements.
Separation of Concerns: CSS promotes the separation of content (HTML) and presentation (CSS), making it easier to update the look and feel of a website without modifying the content.
JavaScript:

Behavior and Interactivity: JavaScript adds dynamic behavior and interactivity to a web page. It allows for client-side scripting, meaning code executed on the user's browser.
DOM Manipulation: JavaScript interacts with the Document Object Model (DOM), which represents the structure of the HTML document. It can dynamically update or modify the content, structure, and style of the page in response to user actions.
Event Handling: JavaScript enables the handling of user events (e.g., clicks, mouse movements) and allows for the execution of functions in response to those events.
Asynchronous Operations: JavaScript is often used to make asynchronous requests to servers (AJAX) to fetch or send data without requiring a page refresh.
Overall Flow:

The browser loads the HTML file and constructs the DOM tree based on the HTML structure.
CSS is applied to style the elements based on the rules defined in the stylesheets.
JavaScript can be executed to add interactivity, manipulate the DOM, and handle user actions.
The combination of HTML, CSS, and JavaScript creates a visually appealing and interactive web page.
This separation of concerns (HTML for structure, CSS for presentation, and JavaScript for behavior) is a fundamental principle in modern web development, often referred to as the "HTML-CSS-JS" stack.
*/