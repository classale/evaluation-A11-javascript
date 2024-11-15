// ex08.js

function calculate(n1, n2, operation) {
	return operation(n1, n2);
}

function addition(n1, n2) {
	return n1 + n2;
}

function subtraction(n1, n2) {
	return n1 - n2;
}

console.log(calculate(0, 1, addition)); // Résultat attendu: 1
console.log(calculate(0, 10, subtraction)); // Résultat attendu: -10