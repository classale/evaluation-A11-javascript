// ex06.js

function getReduction(price, age) {
	if(age > 25) {
        return price;
    } else if(age <= 25 && age > 18) {
        return 0.7 * price;
    } else if(age <= 18 && age >= 5) {
        return price / 2;
    } else if(age < 5) {
        return 0;
    }
}

console.log(getReduction(10, 5)); // Résultat attendu: 0
console.log(getReduction(150, 25)); // Résultat attendu: 45