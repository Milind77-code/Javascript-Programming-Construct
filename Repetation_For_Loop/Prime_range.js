import { question } from 'readline-sync';
var n = question('Enter number? ');
var counter = 0;
var primeNumbers = "Prime Numbers: ";
for (var i = 2; i <= n; ++i) {
    counter = 0;
    for (var j = 2; j <= n; ++j) {
        if (i >= j && i % j == 0) {
            ++counter;
        }

    }
    if (counter == 1) {
        primeNumbers = primeNumbers + i + "  ";
    }

}
console.log(primeNumbers);