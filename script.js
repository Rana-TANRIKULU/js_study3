//Date Object
//pazar=0 pzt=1 salı=2 çrş=3 per=4 cuma=5 cmt=6
let d = new Date ();
let birthday = new Date(2011,3,28); 

//Set Methods
d.setFullYear(2050);
d.setMonth(8);
d.setDate(30);
d.setHours(11);
d.setMinutes(30)

//Get Methods
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMonth());
console.log(d.getMinutes())
console.log(d.getSeconds());



console.log(d.getFullYear() - birthday.getFullYear());
console.log(d.getMonth() - birthday.getMonth());
console.log(d.getDate() - birthday.getDate());

console.log(d);
console.log(typeof d);
 