function criptografar(texto, N) {
    if (N < 1 || N > 10) {
        alert("O valor de N deve estar entre 1 e 10");
        return texto;
    }
    
    function deslocarLetra(char, deslocamento) {
        const isUpperCase = char >= 'A' && char <= 'Z';
        const isLowerCase = char >= 'a' && char <= 'z';
        
        if (isUpperCase || isLowerCase) {
            const base = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
            return String.fromCharCode(((char.charCodeAt(0) - base + deslocamento) % 26) + base);
        }
        return char;
    }
    
    for (let i = 0; i < 3; i++) { // Repete a criptografia 3 vezes
        texto = texto.split('').map(char => deslocarLetra(char, N)).join('');
    }
    
    return texto;
}

function descriptografar(texto, N) {
    if (N < 1 || N > 10) {
        alert("O valor de N deve estar entre 1 e 10");
        return texto;
    }

    function deslocarLetra(char, deslocamento) {
        const isUpperCase = char >= 'A' && char <= 'Z';
        const isLowerCase = char >= 'a' && char <= 'z';

        if (isUpperCase || isLowerCase) {
            const base = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
            return String.fromCharCode(((char.charCodeAt(0) - base - deslocamento + 26) % 26) + base);
        }
        return char;
    }

    for (let i = 0; i < 3; i++) { // Reverte a criptografia 3 vezes
        texto = texto.split('').map(char => deslocarLetra(char, N)).join('');
    }

    return texto;
}

function encryptText() {
    let inputText = document.getElementById("inputText").value;
    let shiftValue = parseInt(document.getElementById("shiftValue").value, 10);

    if (!inputText) {
        alert("Digite uma frase para criptografar!");
        return;
    }

    if (isNaN(shiftValue) || shiftValue < 1 || shiftValue > 10) {
        alert("Insira um valor de deslocamento entre 1 e 10.");
        return;
    }

    let encryptedText = criptografar(inputText, shiftValue);
    document.getElementById("output").innerText = "Criptografado: " + encryptedText;
}

function decryptText() {
    let encryptedText = document.getElementById("encryptedText").value;
    let shiftValue = parseInt(document.getElementById("decryptShiftValue").value, 10);

    if (!encryptedText) {
        alert("Digite uma frase criptografada para descriptografar!");
        return;
    }

    if (isNaN(shiftValue) || shiftValue < 1 || shiftValue > 10) {
        alert("Insira um valor de deslocamento entre 1 e 10.");
        return;
    }

    let decryptedText = descriptografar(encryptedText, shiftValue);
    document.getElementById("outputDecrypted").innerText = "Descriptografado: " + decryptedText;
}

// Exemplo de teste no console:
console.log(criptografar("Zebra-123", 1)); // Saída esperada: "Cheud-123"
console.log(descriptografar("Cheud-123", 1)); // Saída esperada: "Zebra-123"
