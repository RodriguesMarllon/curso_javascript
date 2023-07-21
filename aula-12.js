function numerosImpares (entrada) {
    let contar = 0;
    let novoValor = entrada;
    
    while (contar < 6) {
        if (novoValor % 2 !== 0) {
            console.log(novoValor);
            contar++;
        }

        novoValor++;
    }  
}

numerosImpares(9);