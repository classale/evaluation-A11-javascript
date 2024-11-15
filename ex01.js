// ex01.js

function greetings(firstname) {
    return `Bienvenue,${firstname == "" ? " " : firstname}${firstname} !`;
}

console.log(greetings("")); // Résultat attendu: "Bienvenue, !"
console.log(greetings("Ben")); // Résultat attendu: "Bienvenue, Ben !"