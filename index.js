// Definições básicas
let continuar = true
let abrigos = []

let abrigo1 = {
    nome: 'Centro de Apoio a Criança e Adolescente',
    endereco: 'Rua Carlos Gomes, 555, Centro Norte',
    cidade: 'Santo Ângelo',
    telefone: '(55) 3312-5770',
    capacidade: 21
}

let abrigo2 = {
    nome: 'Casa de Acolhimento para Crianças e Adolescentes',
    endereco: 'Rua Medianeira, 91, Cristo Rei',
    cidade: 'São Leopoldo',
    telefone: '(51) 99910-9917',
    capacidade: '?'
}

let abrigo3 = {
    nome: 'Casa Caminho Clara e Francisco',
    endereco: 'Corte Real, 180, Sharlau',
    cidade: 'São Leopoldo',
    telefone: '(51) 99545-2996',
    capacidade: 21
}

let abrigo4 = {
    nome: 'Casa Aberta Padre Cândido Santini',
    endereco: 'Rua Artur Georg, 90, Feitoria Nova',
    cidade: 'São Leopoldo',
    telefone: '(51) 3575-4831',
    capacidade: 45
}

let abrigo5 = {
    nome: 'Casa João Bosco - Antigo Lar da Menina',
    endereco: 'Rua Amantino Antonio Peteffi, 244, São Jorge',
    cidade: 'Novo Hamburgo',
    telefone: '51-99216-4516',
    capacidade: 20
}

let abrigo6 = {
    nome: 'Associação do Adolescente Nova Vida',
    endereco: 'Rua Marcício J. Pereira, 120, Primavera',
    cidade: 'Novo Hamburgo',
    telefone: '51-99216-4516',
    capacidade: '?'
}

let abrigo7 = {
    nome: 'Casa Abrigo das Meninas Querubim',
    endereco: 'Rua Presidente Lucena, 3021, Primavera',
    cidade: 'Novo Hamburgo',
    telefone: '51-99216-4516',
    capacidade: '?'
}

abrigos.push(abrigo1, abrigo2, abrigo3, abrigo4, abrigo5, abrigo6, abrigo7)

// Função para cadastrar abrigo
function cadastrarAbrigo() {
    let nome = prompt("Digite o nome do abrigo:")
    let endereco = prompt("Digite o endereço do abrigo:")
    let cidade = prompt("Digite a cidade do abrigo:")
    let telefone = prompt("Digite o telefone do abrigo:")
    let capacidade = Number(prompt("Digite a capacidade de lotação do abrigo:"))

    let abrigo = {
        nome: nome,
        endereco: endereco,
        cidade: cidade,
        telefone: telefone,
        capacidade: capacidade
    }

    abrigos.push(abrigo)
    console.log("O abrigo " + abrigo.nome + " foi cadastrado com sucesso!")
}

// Função para listar abrigos
function listarAbrigos() {
    console.log("Lista de abrigos cadastrados:")
    for (let i = 0; i < abrigos.length; i++) {
        console.log("Código: " + i)
        console.log("Nome: " + abrigos[i].nome)
        console.log("Endereço: " + abrigos[i].endereco)
        console.log("Cidade: " + abrigos[i].cidade)
        console.log("Telefone: " + abrigos[i].telefone)
        console.log("Capacidade: " + abrigos[i].capacidade)
        console.log("--------------------------------------------------------")
    }
}

// Função para buscar abrigo
function buscarAbrigo() {
    let cidade = prompt("Digite a cidade para buscar abrigos:")

    console.log("Abrigos encontrados em " + cidade + ":")
    for (let i = 0; i < abrigos.length; i++) {
        if (abrigos[i].cidade === cidade) {
            console.log("Código: " + i)
            console.log("Nome: " + abrigos[i].nome)
            console.log("Endereço: " + abrigos[i].endereco)
            console.log("Telefone: " + abrigos[i].telefone)
            console.log("Capacidade: " + abrigos[i].capacidade)
            console.log("--------------------------------------------------------")
        }
    }
}

// Função para remover abrigo
function removerAbrigo() {
    let nomeAbrigo = prompt("Digite o nome do abrigo para remover:")
    
    let index = -1;
    for (let i = 0; i < abrigos.length; i++) {
        if (abrigos[i].nome === nomeAbrigo) {
        index = i;
        break;
        }
    }
  
    if (index !== -1) {
        abrigos.splice(index, 1);
        console.log("O abrigo " + nomeAbrigo + " foi removido com sucesso!");
    } 
    else {
      console.log("Abrigo não encontrado.");
    }
}

// Função para sair
function sair() {
    continuar = false
    console.log("Tchau! Para reiniciar, atualize a aba do navegador.")
}

  // Loop para perguntar ao usuário
while (continuar) {
    // Formatar pergunta
    let pergunta  = "ABRIGOS TEMPORÁRIOS\n"
    pergunta += "=========================\n"
    pergunta += "Escolha uma opção:\n"
    pergunta += "1. Cadastrar abrigo\n"
    pergunta += "2. Listar abrigos\n"
    pergunta += "3. Procurar abrigo\n"
    pergunta += "4. Remover abrigo\n"
    pergunta += "5. Sair"
    
    // Guardar resposta
    let resposta = Number(prompt(pergunta))
    
    // Identificar resposta e chamar função correspondente
    switch (resposta) {
        case 1:
        cadastrarAbrigo();
    break;
        case 2:
        listarAbrigos();
    break;
        case 3:
        buscarAbrigo();
    break;
        case 4:
        removerAbrigo();
    break;
        case 5:
        sair();
    break;
        default:
        console.log("Opção inválida. Tente novamente.");
        console.log("--------------------------------------------------------");
    }
}
