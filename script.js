//Function para gerar id sequencial (0 - 999)
//Function para passar os serviços para o select

//Function para cadastrar o cliente na tabela

//Variaveis que irei usar!!!
let servicos = [
    'Perfil Comum', 
    'Perfil com ID', 
    'Perfil pronto para anunciar',
    'BM de 280',
    'BM de 5200',
    'BM sem limite',
    'Seguidores',
    'Curtidas',
    'Site',
    'Landing Page',
    'Configuração de ecommerce',
    'Conta de Instagram',
    'Conta de Tiktok',
    'Canal de youtube'
]

//id de cada cliente
let id = 0


//===================================
//Passando os servicos para o select
//===================================

let selectServicos = document.getElementById('servicoContratado')

function readServicos(){
    for (let i = 0; i <= servicos.length; i++){
        selectServicos.options[i-1] = new Option(servicos[i-1])
    }
}
window.onload = function(){
    readServicos()
}

//==================================
//Abrindo modal de cadastro
//==================================
let bt_AbrirModal = document.getElementById('cadastroCliente')

function abrirModal(){
    document.getElementById('div-cadastro').removeAttribute('class', 'off')
    document.getElementById('div-cadastro').setAttribute('class','on')
}

bt_AbrirModal.addEventListener('click', abrirModal)

//==================================
//Fechando modal de cadastro
//==================================

function fecharModal(){
    document.getElementById('div-cadastro').removeAttribute('class', 'on')
    document.getElementById('div-cadastro').setAttribute('class','off')
}

document.getElementById('bt-closeModal').addEventListener('click', fecharModal)


//====================================
//Adicionando valores ao localstorage
//====================================
let nomeCliente = document.getElementById('nome')
let telCliente = document.getElementById('celular')
let servicoCliente = document.getElementById('servicoContratado')
let valorCliente = document.getElementById('valor')

function saveClient(){
    if(nomeCliente.value != "" && telCliente.value != 0 && valorCliente.value != 0){
        localStorage.setItem('Nome',document.getElementById('nome').value)
    } else {
        alert("Não é permitido espaços em branco.")
    }
}

document.getElementById('bt-addClient').addEventListener('click', saveClient)