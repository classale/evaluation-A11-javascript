// ex07.js

function isNationalIDValid(name, age, zip, password) {
	if(name == "") return false;
    if(age < 18 || age > 65) return false;
    if(zip > 99999 || zip < 0) return false;
    if(password == "azerty" || password == "qwerty" || password == "1234") return false;
    return true;
}

console.log(isNationalIDValid("", 18, 69100, "hello")); // Résultat attendu: false
console.log(isNationalIDValid("John", 18, 69100, "amerty")); // Résultat attendu: true