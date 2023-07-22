const teste1 = (callback) => {
    
    setTimeout(() => {
        console.log('test1');
    }, 100);
    
}

const teste2 = (callback) => {
    setTimeout(() => {
        console.log('test2');
        callback();
    }, 6000);
}

const teste3 = (callback) => {
    setTimeout(() => {
        console.log('test3');
    }, 300);
}

const teste4 = (callback) => {
    setTimeout(() => {
        console.log('test4');
    }, 1);
}

const funcaocallback = () => {
    console.log('Salvou o Usuário!')
}

teste1();
console.log(1 + 1);
teste2(funcaocallback);
teste3();
console.log(2 + 2);
teste4();