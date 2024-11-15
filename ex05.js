// ex05.js

function isEnoughMoney(price, wallet) {
	return wallet >= price;
}

console.log(isEnoughMoney(10, 0)); // Résultat attendu: false
console.log(isEnoughMoney(5, 25)); // Résultat attendu: true