// console.log("Hello");

// Storing the data
localStorage.setItem("name", "Aritra Nandi");
localStorage.setItem("age", "23");
localStorage.setItem("place", "Chennai");

// Updating the data
localStorage.setItem("age", "40");

// getting the data
let name = localStorage.getItem("name");
console.log("my name is ", name);

// Getting a key
let key1 = localStorage.key(1);
console.log("key", key1);

// length of the data
let length = localStorage.length;
console.log("length", length);

// Removing an item
let re1 = localStorage.removeItem("age");

// clearing all data
// localStorage.clear(); 


// Changing the text on button using localstorage
let btn = document.querySelector(".btn");
localStorage.setItem("text", "Clicked!");
let txt = localStorage.getItem("text");
function changeText(){
    btn.innerText = txt;
    localStorage.clear();
}

// Storing an array in local storage
let arr = ["Aritra", "Shivam", "SOnu", "Amit"];  
// console.log("arr", arr);
let str = JSON.stringify(arr);  // Converting the array into string and then storing it.
// console.log("str", str);
localStorage.setItem("students", str);


// Getting the stored array 

let resStr = localStorage.getItem("students");

let resArr = JSON.parse(resStr);    //Converting the string into array then printing it.

console.log("Stored Array", resArr);


// Storing an array printing the data in the form of list

let todos = [
    "Go to gym", 
    "Studying for 2 hours", 
    "Chilling out with friends", 
    "Checking out GeeksforGeeks"
]

localStorage.setItem("todos", JSON.stringify(todos));

let todoArr = JSON.parse(localStorage.getItem("todos"));
let todo = document.querySelector(".todos");
todoArr.forEach((item)=>{
    let li = document.createElement("li");
    li.innerText = item;
    todo.appendChild(li);
})

sessionStorage.setItem("myName", "Aritra Nandi");