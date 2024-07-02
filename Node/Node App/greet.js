//const firstname = process.argv[2];
//const lastname = process.argv[3];
const upper_first = firstname => firstname[0].toUpperCase() + firstname.substring(1) ;
let firstname = process.argv[2];
firstname = upper_first(firstname);
let lastname = process.argv[3];
lastname = upper_first(lastname);

console.log(`hello ${firstname} ${lastname}!`);