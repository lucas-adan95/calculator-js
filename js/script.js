function agregar(valor) {
    var pantalla = document.getElementById('pantalla');

    if (pantalla.value === '0' && !esOperador(valor) && valor !== '.') {
        pantalla.value = ''; // Si es así, borra el 0 inicial
    }
    
    // Obtener el último carácter de la pantalla
    var ultimoCaracter = pantalla.value.slice(-1);

    // Verificar si el valor a agregar es un operador y el último carácter también lo es
    if (esOperador(valor) && esOperador(ultimoCaracter)) {
        // Si ya hay un operador al final, no agregar otro
        return;
    }

    // Agregar el valor a la pantalla
    pantalla.value += valor;
}

// Función auxiliar para verificar si un carácter es un operador
function esOperador(caracter) {
    return ['+', '-', '*', '/'].includes(caracter);
}

function borrar() {
    document.getElementById('pantalla').value = '0';
}

function borrarUltimoNumero() {
    var pantalla = document.getElementById('pantalla');
    pantalla.value = pantalla.value.slice(0, -1);
}

function calcular() {
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}