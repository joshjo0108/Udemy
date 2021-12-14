// OLD WAY OF WRITING JAVASCRIPT
var website = "https://codingforeverybody.com/";
// command + d: SELECTING THE SAME WORD
var teacherName = "Kalob";
console.log(teacherName);
console.log(website);

if(teacherName == "Kalob") {
// CAN BE REASSIGNED
    let apples = 1;
// CANNOT BE REASSIGNED
// \" TO LET KNOW ""
    const height = "6'0\"";
// HAS TO BE WITHIN THE CURLY BRACES
    console.log("I have",apples,"apples");
    console.log("My height is",height,".");
}
/*
    THIS IS JUST GOING TO COMMENT 
    ALL THE LINES!!
*/

// JAVASCRIPT DATA TYPES
const str = "A string"; //STRING
const num = 3;  // NUMBER
const flt = 3.14; // FLOAT
const bool = true; // OR 'false' <- BOOLEAN
const list = ["ITEM 1",2,"THREE", 4.5, []]; //  ARRAY = LIST
const thing = null; // HAS NOTHING IN IT
const notDefined = undefined; //CURRENTLY HOLDS NO VALUE
const getAge = function() {return 31;} // FUNCTION
const obj = {   //LIKE A DICTIONARY
    'KEY':'VALUE',
    'name':'jae won jo',
    'age': 30
}   // CAN BE ACCESSED WITH -> obj['name']


const name = 'Jae Won Jo';
if (name == 'Aaron'){
    console.log("this is Aaron!");
}
else if (name == 'Nathan'){
    console.log("This is Nathan");
}
else {
    console.log("This is", name);
}

const age = 17;
if(age>=18){
    console.log("Now you are allowed to vote!");
} else if(age>=21) {
    console.log("You are allowed to drink!");
} else {
    console.log("You are not old enough to drink alcohol!");
}
// ONLY WHEN YOU WANT TO MODIFY STUFF FROM HTML FILE USING .JS
/*
const text = document.getElementById("text");
text.innerText = "Something different!";
text.innerHTML = "THIS is html <strong>modification</strong>";
*/

// MORE OBJECTS
const person = {
    "name":"Jae Won Jo",
    "age":25,
    "height":8.5
}
 const cat = {
     'name':"Zephyr",
     'words':'Meow',
     'action': "Nap",
     'size': 'big'
 }

 // WHEN YOU WANT TO ACCESS TO THESE OBJECTS
//  cat['action'] <- USE IT LIKE THIS