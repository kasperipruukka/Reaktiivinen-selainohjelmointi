let numerot = [] //Array();

// console.log(numerot);

numerot.push(1);
numerot.push(2);
numerot.push(3);
numerot.push(4);
numerot.push(5);

// console.log(numerot);

let tuplatutNumerot = numerot.map(x => x*2);
// console.log({numerot});
// console.log({tuplatutNumerot});

let parillisetNumerot = numerot.filter(x => x % 2 === 0);
console.log({parillisetNumerot});
