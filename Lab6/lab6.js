//strings Object

var val =  new String('abs'); // 1
console.log(val);

console.log(val.length); //2

console.log(val.charAt(0)); //3 
console.log(val.charCodeAt(1)); //4

var new_str = "frozen"; //5

console.log(val.concat(new_str)); //6

console.log(new_str.indexOf('o'));  //7

console.log(new_str.lastIndexOf('z')); //8

console.log(new_str.match(/^[a-zA-Z0-9]{6}$/)); //9

console.log(new_str.substr(1,3)); //10

console.log(new_str.substring(0,5)); //11

var temp = val.replace('abs',new_str + " rockzz"); //12
console.log(temp,val);

console.log(new_str.search('roz'));  //13

console.log(new_str.toUpperCase()); //14
console.log(new_str.toLowerCase()); //15

var qwert = new String("  Sherlock  ");
console.log(qwert.trim()); //removes whitespace //16

var sent = "this is ncp lab";
console.log(sent.split(" ")); //split //17
console.log(sent.split(""));

var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13); //18
console.log(res);

var str = "Hello world!";
console.log(str.repeat(2)); //19

var temp1 = "123";
var temp2 = 123;
console.log(temp1==temp2);
console.log(temp1===temp2); //20

console.log(`${temp1} rockss`);


var ty = " what to trim "; //21
console.log(ty.trimStart(),ty.length,ty.trimStart().length);

console.log(ty.trimEnd(),ty.length,ty.trimEnd().length);


