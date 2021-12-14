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

