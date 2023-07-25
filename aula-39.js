// Object.defineProperty
// Object.defineProperties

const propriedadePadrao = (valorInicial) => ({
    value: valorInicial,
    writable: false,     // se estiver true => usuario.nome = 'novo nome' 
    configurable: false, // se estiver true => posso deletar o nome.
    enumerable: true     // se estiver true => ele será exibido no objeto.

});

class Usuario {

    constructor(nome, senha, email) {
            this.nome = nome;
            this.senha = senha;
            this.email = email;
            
        Object.defineProperties(this, {
            nome: {
                get: () => nome,
                set: (value) => nome = value
            },
            senha: {
                get: () => senha,
                set: (value) => {
                    if (value.lenght < 4) {
                        throw new TypeError('Precisa de Pelo menos 4 Digitos')
                    }
                    senha = value
                }    
            },
            email: {
                get: () => email,
                set: (value) => email = value
            }
        })
    }
    
}

const usuario = new Usuario('nome', 'senhas', 'emails');

usuario.senha = 'af';

console.log(usuario.senha);