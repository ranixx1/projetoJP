function criptografar(texto, N) {
    if (N < 1 || N > 10) {
        throw new Error("O valor de N deve estar entre 1 e 10");
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
    
    for (let i = 0; i < 3; i++) {
        texto = texto.split('').map(char => deslocarLetra(char, N)).join('');
    }
    
    return texto;
}

console.log(criptografar("Zebra-123", 1)); // Saída esperada: "Cheud-123"
