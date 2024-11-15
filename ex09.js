let alphabet = "abcdefghijklmnopqrstuvwxyz";

function encodePassword(password, encodeFunction) {
	return encodeFunction(password);
}

function encodeRot8(password) {
	let out = "";
    for(let letter of password) {
        let isLowerCase = letter == letter.toLowerCase();
        let i = alphabet.indexOf(letter.toLowerCase());
        i = (i + 8) % 26;
        out += isLowerCase ? alphabet[i] : alphabet[i].toUpperCase();
    }
    return out;
}

function encodeRot16(password) {
	let out = "";
    for(let letter of password) {
        let isLowerCase = letter == letter.toLowerCase();
        let i = alphabet.indexOf(letter.toLowerCase());
        i = (i + 16) % 26;
        out += isLowerCase ? alphabet[i] : alphabet[i].toUpperCase();
    }
    return out;
}

console.log(encodePassword("abc", encodeRot8)); // Résultat attendu: "ijk";
console.log(encodePassword("abc", encodeRot16)); // Résultat attendu: "qrs";
console.log(encodePassword("xyz", encodeRot8)); // Résultat attendu: "fgh";
console.log(encodePassword("xyz", encodeRot16)); // Résultat attendu: "nop";