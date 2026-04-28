let validacao = false;
function Nome() {
    let nome = ipt_nome.value;
    let indice_nome = new RegExp("[A-z]");
    for (let i = 0; i < nome.length; i++) {
        if (indice_nome.test(nome[i]) == true) {
            validacao = true;
        } else {
            validacao = false;
            spn_nome.innerHTML = "Nome contem caracteres invalidos!";
            break;
        }
    }
}
function Email() {
    let email = ipt_email.value;

    let fim = email.endsWith(".com") || email.endsWith('.com.br');
    let inicio = !email.startsWith("@") || !email.startsWith(".com");
    let vezes_arroba = email.indexOf("@") == email.lastIndexOf("@");
    let vezes_ponto_com = email.indexOf(".com") == email.lastIndexOf(".com");
    let numero = email.includes(Number) > email.indexOf("@")

    if (fim && inicio && vezes_arroba && vezes_ponto_com) {
        validacao = true;
        let email = ipt_email.value;
    } else {
        validacao = false;
        spn_email.innerHTML = "Formato do email invalido!";
    }
}
let senha_correta = false;
function Senha() {
    let senha = ipt_senha.value;

    if (senha.length >= 6 && senha.length <= 20) {
        validacao = true;
        senha_correta = true;
    } else {
        validacao = false;
        spn_senha.innerHTML = "A senha deve conter no minimo 6 e no maximo 12 caracteres!";
    }
}

function validação_senha() {
    let senha = ipt_senha.value;

    let confirmacao_senha = ipt_confirmacaoSenha.value;

    if (senha_correta == true && senha == confirmacao_senha) {
        validacao = true;
    } else {
        validacao = false;
        spn_confirmacao_senha.innerHTML = "Senha divergente!";
    }
}
function cadastrar() {
    if (validacao == true) {

    } else {
        spn_cadastrar.innerHTML = "Falha no cadastro, reveja os itens pedidos.";
    }
}