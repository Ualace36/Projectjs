//Criação de objeto literal "Account", para utilização no cadastro de contas.

let ContaBancaria = function (numero, tipo, saldo, titular){
    this.numero = numero;
    this.tipo = tipo;
    this.saldo = saldo;
    this.titular = titular;
}

//Criação de Json para armazenar os dados dos cliente (simulando um banco de dados dos clientes do banco).

let clients = [
    {
        "numero" : 02750550509,
        "tipo" : "Conta Corrente",
        "saldo" : 8578,
        "titular" : "Ualace Santos"
    },

    {
        "numero" : 1183971869,
        "tipo" : "Conta Poupança",
        "saldo" : 8675,
        "titular" : "Nilton Jesus",
    },

    {
        "numero" : 02702702702,
        "tipo" : "Conta Corrente",
        "saldo" : 8698,
        "titular" : "Ualace Jesus",
    },

    {
        "numero" : 02750850802,
        "tipo" : "Conta Poupança",
        "saldo" : 55555,
        "titular" : "Pedro João",
    },

    {
        "numero" : 2155645665,
        "tipo" : "Conta Poupança",
        "saldo" : 12345,
        "titular" : "Maelson Oliveira",
    },

    {
        "numero" : 12345678978,
        "tipo" : "Conta Poupança",
        "saldo" : 12354,
        "titular" : "Jilson Jilson",
    },

    {
        "numero" : 0000000000,
        "tipo" : "Conta Corrente",
        "saldo" : 00000,
        "titular" : "Ito Silva",
    },

    {
        "numero" : 1111111111,
        "tipo" : "Conta Corrente",
        "saldo" : 11111,
        "titular" : "Andre Andre",
    },

    {
        "numero" : 1111111111,
        "tipo" : "Conta Poupança",
        "saldo" : 00000,
        "titular" : "Miro Andre",
    },

    {
        "numero" : 1223455678,
        "tipo" : "Conta Corrente",
        "saldo" : 33333,
        "titular" : "Helena Ito",
    },

    {
        "numero" : 00000000,
        "tipo" : "Conta Poupança",
        "saldo" : 12122,
        "titular" : "João Ilson",
    },
];

//Realizar uma lista de objetos (Cadastro dos clientes)

let listClients = [];              
for (index in clients) {
    listClients.push(new ContaBancaria (clients[index].numero, clients[index].tipo, clients[index].saldo, clients[index].titular));
}

//Criação de objeto literal "Banco", para realizar os métodos "pesquisa de cliente", "depósito", "saque".

let Banco = {
    clientsBanco : listClients,
    searchClient : function(name){          //Método para realizar pesquisa de cliente.
        for (index in listClients) {
            if (listClients[index].titular == name) {
                return listClients[index];
            }
        } 
        return "Cliente não encontrado!";
    },
    deposit: function (name,amount) {       //Operação para depósito.
        for (index in listClients) {
            if (listClients[index].titular == name) {
             listClients[index].saldo += amount;
             return "Depósito realizado, seu novo saldo é R$" + listClients[index].saldo;
            }
        }
    },
    withdraw: function (name,amount) {      //Operação para saque.
        for (index in listClients) {
            if (listClients[index].titular == name) {
                listClients[index].saldo -= amount;
                if(listClients[index].saldo < 0) {
                    return "Fundos insuficientes";
                }else{
                    return "Extração feita com sucesso, seu novo saldo é: R$ " + listClients[index].saldo;
                }
            }
        }
    },
}

//Imprimi dados do cliente.
console.log(Banco.searchClient("Helena Ito"));
console.log("------------------------------------------------------------")

//Imprimi comprovante de depósito e o saldo atual do cliente.
console.log(Banco.deposit("Helena Ito", 8000));
console.log("------------------------------------------------------------")

//Imprimi comprovante de saque e o saldo atual do cliente.
console.log(Banco.withdraw("Helena Ito", 10000));
console.log("------------------------------------------------------------")
