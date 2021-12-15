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

let course = "     This is a javascript course!   ";

// typeof(course); <- THIS IS WHEN YOU WANT TO KNOW WHAT TYPE IT IS

course.search("javascript");    // TELL ME WHICH PLACE IT IS
course.slice(5,8);  // STARTING FROM 5TH UNTIL 8TH
course.substr(5,3); // STARTING FROM 5TH, AND LENGTH OF 3
course.replace("javascript", "java101");    // REPLACE A STRING WITH SOMETHING ELSE
course.toUpperCase();   // ALL TO UPPER CASE
course.toLowerCase();   // ALL TO LOWER CASE
course.trim();      // TRIM ALL THE EXCESS SPACE THAT IS AT THE BEGINNING OR AT THE END

words = course.split(" ");  // SPLIT THE STRING INTO AN ARRAY
console.log(words);

course.length;  // DOES NOT REQUIRE ()

course[0];

// CASTING----------------------------------------------------------------------------------------
let age2 = '31';

age2 = Boolean(age2); // ANYTHING THAT IS 0 IS "FALSE", OTHER THAN THAT IT IS "TRUE"
age2 = String(age2);
age2.replace("1","3");   // CASTING THE INTEGER TO STRING AND CHANGE THE 1 TO 3

let myage = 51;

age2 = Number(age2);
let result = age2 + myage;

// CONCATENATION---------------------------------------------------------------------------------
// TEMPLATE LITERAL ${}
const name1 = "Jae Won Jo";
let age1 = 21; 
// OLD SCHOOL WAY
console.log("My name is "+ name1 + ". My age is " + age1);
// MODERN WAY OF CONCATENATION
console.log(`My name is ${name}. My age is ${age1}`);

// ARRAY ---------------------------------------------------------------------------------
let lst = [1,"two",3,[], {}];
lst.push("New item here");

let newItem = lst.pop();    //TAKES THE LAST ITEM TO newItem AND REMOVES THE LAST ITEM FROM lst