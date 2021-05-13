const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('hello');
// Interpolated
console.log('hello i am a %s string', ':0');
// Styled
console.log('%c I am some great text', 'font-size:50px; background:red')
// warning!
console.warn('oh no!!');
// Error :|
console.error('oh damn!!');
// Info
console.info('get me some information');
// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'no there is no this class');
// clearing
// console.clear();
// Viewing DOM Elements
console.log(p);
console.dir(p);
// Grouping together
dogs.forEach(dog => {
    console.group(`${dog.name}`);
    console.log(`this is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
})
// counting
console.count('wes');
console.count('steven');
console.count('wes');
console.count('wes');
console.count('steven');
console.count('steven');
console.count('wes');
console.count('steven');
// timing
console.time('fetching data')
fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    })
// dog
console.table(dogs);