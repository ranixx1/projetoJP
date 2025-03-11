function criptografar(texto, N) {
    if (N < 1 || N > 10) {
<<<<<<< HEAD
        alert("O valor de N deve estar entre 1 e 10");
        return texto;
=======
        throw new Error("O valor de N deve estar entre 1 e 10");
>>>>>>> 0f70f60b59b4b154f503765b79a7c7ab96034a38
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
    
<<<<<<< HEAD
    for (let i = 0; i < 3; i++) { 
=======
    for (let i = 0; i < 3; i++) {
>>>>>>> 0f70f60b59b4b154f503765b79a7c7ab96034a38
        texto = texto.split('').map(char => deslocarLetra(char, N)).join('');
    }
    
    return texto;
}

<<<<<<< HEAD
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
=======
console.log(criptografar("Zebra-123", 1)); // Saída esperada: "Cheud-123"
>>>>>>> 0f70f60b59b4b154f503765b79a7c7ab96034a38
