
//Überprüfe das Ergebnis, ob x größer als z ist AND(&&) x größer als y ist.
//Überprüfe das Ergebnis, ob x NICHT gleich y ist.
//Überprüfe das Ergebnis, ob z kleiner als y ist OR(||) z größer als x ist.
//Überprüfe das Ergebnis, ob x gleich z ist OR x NICHT gleich y ist.
//Überprüfe das Ergebnis, ob x größer oder gleich 10 ist AND y kleiner oder gleich 10 ist.
//Überprüfe das Ergebnis, ob x multipliziert mit z kleiner als 100 ist OR ob x multipliziert mit y größer als 100 ist.


let x = 10;
let y = 15;
let z = 20;

console.log(x > z && x > y);
console.log(x != y);
console.log(z < y || z > x);
console.log(x == z || x != y);
console.log(x >= 10 && y<=10)
console.log(x * z < 100 || x * y > 100)