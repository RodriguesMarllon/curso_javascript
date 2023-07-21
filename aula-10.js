function gastoCombustivel (tempoGasto, velocidaeMedia) {
    let resultado = (velocidaeMedia * tempoGasto) / 12;
    return resultado.toFixed(3);
}

console.log('resultado:', calculo(10, 85));
console.log('resultado:', calculo(2, 92));
console.log('resultado:', calculo(22, 671));


