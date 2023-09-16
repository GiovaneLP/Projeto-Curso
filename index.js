// Definições básicas
let continuar = true
let abrigos = []

let abrigo1 = {
    nome: 'Deus',
    endereco: 'Av. Tharcilo Nunes, 715, Santo Andre',
    cidade: 'São Leopoldo',
    telefone: '(51) 992998272',
    capacidade: 50
}

abrigos.push(abrigo1)

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
        console.log("-----------------------------------------------")
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
            console.log("-----------------------------------------------")
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
        console.log("-----------------------------------------------");
    }
}
