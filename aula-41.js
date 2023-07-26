class Produto {
    nome;
    preco;
    descricao;
    codigo;
    quantidade_em_estoque;

    constructor(nome,preco, descricao, codigo, quantidade_em_estoque) {
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
        this.codigo = codigo;
        this.quantidade_em_estoque = quantidade_em_estoque;
    }

    alteraPreco(valor) {
        if (valor < 0) {
            throw RangeError('O valor digitado é menor do que 0!');
        }
        this.preco = valor;
        return this.preco;
    }

    adicionarProduto(valor) {
        this.quantidade_em_estoque += valor;
        return this.quantidade_em_estoque;
    }

    removerProduto(valor) {
        this.quantidade_em_estoque -= valor;

        if (this.quantidade_em_estoque < 0) {
            throw RangeError('Não é possível remover mais produtos do que tem no estoque!')
        }
        return this.quantidade_em_estoque;
    }
}

class Smartphone extends Produto {
    marca;
    modelo;
    sistema_operacional;

    info() {
        return `
            nome: ${this.nome}/n   
            preco: ${this.preco}/n   
            descricao: ${this.descricao}/n   
            codigo: ${this.codigo}/n   
            quantidade em estoque: ${this.quantidade_em_estoque}/n   
            marca: ${this.marca}/n        
            modelo: ${this.modelo}/n        
            sistema operacional: ${this.sistema_operacional}/n                
        `
    }

    constructor(nome, preco, descricao, codigo, quantidade_em_estoque, marca, modelo, sistema_operacional) {
        super(nome, preco, descricao, codigo, quantidade_em_estoque);
        this.marca = marca;
        this.modelo = modelo;
        this.sistema_operacional = sistema_operacional;
    }
}

const smartphone1 = new Smartphone(
    'Poco', 
    'R$ 2000.00', 
    'Não muito', 
    '5110', 
    13000, 
    'Xiaomi', 
    'Poco X4 Pro', 
    'Android'
);


smartphone1.alteraPreco(2000.00);
smartphone1.removerProduto(12000);
smartphone1.adicionarProduto(6);

//console.log(smartphone1.info);

console.log(smartphone1);