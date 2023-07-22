
function calcular(valor) {
    if (valor === 0) {
        throw new Error('Não pode ser 0')
    }
    return valor / 2;
}

try {
    const resutado = calcular(0);
    console.log('resultado:', resutado);
} catch (error) {
    console.log(error.message);
} finally {
    
}

console.log('continua');