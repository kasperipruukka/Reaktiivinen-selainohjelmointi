function print1(parametri) {
    console.log(parametri);
}

print1('Terve!');

const print2 = (parametri2) => {
    console.log(parametri2);
}

print2('Juu toimii tämäkin anonyymi funktio.');

const print3 = (asia) => asia.toString();
console.log(print3(123));