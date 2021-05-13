let a = { 'name': 'Tim' };
let b = Array.from(a);
b.name = 'jim';
console.log(a.name);
console.log(b.name);