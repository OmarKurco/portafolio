function encriptarTexto(texto) {
    var resultado = '';
    var clave = 5; // Clave para el cifrado, puedes ajustarla según tus necesidades
    
    for (var i = 0; i < texto.length; i++) {
        var codigoCaracter = texto.charCodeAt(i);
        var codigoCaracterEncriptado;
        
        // Letras mayúsculas
        if (codigoCaracter >= 65 && codigoCaracter <= 90) {
            codigoCaracterEncriptado = ((codigoCaracter - 65 + clave) % 26) + 65;
        }
        // Letras minúsculas
        else if (codigoCaracter >= 97 && codigoCaracter <= 122) {
            codigoCaracterEncriptado = ((codigoCaracter - 97 + clave) % 26) + 97;
        }
        // Números
        else if (codigoCaracter >= 48 && codigoCaracter <= 57) {
            codigoCaracterEncriptado = ((codigoCaracter - 48 + clave) % 10) + 48;
        }
        // Otros caracteres
        else {
            codigoCaracterEncriptado = codigoCaracter;
        }
        
        resultado += String.fromCharCode(codigoCaracterEncriptado);
    }
    
    return resultado;
}

function desencriptarTexto(texto) {
    var resultado = '';
    var clave = 5; // Clave para el cifrado, debes coincidir con la clave utilizada para encriptar
    
    for (var i = 0; i < texto.length; i++) {
        var codigoCaracter = texto.charCodeAt(i);
        var codigoCaracterDesencriptado;
        
        // Letras mayúsculas
        if (codigoCaracter >= 65 && codigoCaracter <= 90) {
            codigoCaracterDesencriptado = ((codigoCaracter - 65 - clave + 26) % 26) + 65;
        }
        // Letras minúsculas
        else if (codigoCaracter >= 97 && codigoCaracter <= 122) {
            codigoCaracterDesencriptado = ((codigoCaracter - 97 - clave + 26) % 26) + 97;
        }
        // Números
        else if (codigoCaracter >= 48 && codigoCaracter <= 57) {
            codigoCaracterDesencriptado = ((codigoCaracter - 48 - clave + 10) % 10) + 48;
        }
        // Otros caracteres
        else {
            codigoCaracterDesencriptado = codigoCaracter;
        }
        
        resultado += String.fromCharCode(codigoCaracterDesencriptado);
    }
    
    return resultado;
}

document.getElementById('botonEncriptar').addEventListener('click', function() {
    var textoOriginal = document.getElementById('textoOriginal').value;
    document.getElementById('textoEncriptado').value = encriptarTexto(textoOriginal);
});

document.getElementById('botonCopiar').addEventListener('click', function() {
    var textoEncriptado = document.getElementById('textoEncriptado').value;
    document.getElementById('textoDesencriptado').value = desencriptarTexto(textoEncriptado);
});

document.getElementById('botonDesencriptar').addEventListener('click', function() {
    var textoEncriptado = document.getElementById('textoEncriptado').value;
    document.getElementById('textoDesencriptado').value = desencriptarTexto(textoEncriptado);
});

