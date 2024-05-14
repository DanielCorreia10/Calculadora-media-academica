//dom

const nome = document.querySelector('#nome')
const nota1 = document.querySelector('#nota1')
const nota2 = document.querySelector('#nota2')
const nota3 = document.querySelector('#nota3')
const botao = document.querySelector('#botao')
const resultado = document.querySelector('#resultado')

//evento e funcao

botao.addEventListener('click', ()=>{

    n1 = Number(nota1.value)
    n2 = Number(nota2.value)
    n3 = Number(nota3.value)

    media = (n1+n2+n3)/3

    //situacao = media >= 5 ? "APROVADO!" : "REPROVADO!"  ==> OPERADOR TERNÁRIO

    if (media>=5) {

        situacao = 'APROVADO!'
        
    } else {
        
        situacao = 'EM RECUPERAÇÃO!'

    }

    resultado.textContent = `${nome.value}, sua média foi de ${media.toFixed(1)} pontos. Você está ${situacao}`

})