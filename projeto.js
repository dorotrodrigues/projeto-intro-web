const arrayGatinhos = []

let gatinhoCinza = {
    nome: 'gatinho cinza',
    imagem: './img/gatinhocinza.webp',
    texto: 'Gatinho Cinza, macho, 2 meses de vida. A cor cinza trás estabilidade, tranquilidade e paz. Essa cor nos gatinhos também influencia na sua afetividade e amorosidade. Trazem equilíbrio afetivo, sorte, sensualidade e felicidade.'
}

let gatinhoLaranja = {
    nome: 'gatinho laranja',
    imagem: './img/gatinho-filhote-deitado-1280x720.webp',
    texto: 'Gatinho Laranja, macho, 6 meses de vida. Gato laranja está associado à prosperidade, criatividade e autoestima. Gato bicolor está associado à amizade e sabedoria'
}

let gatinhaPreta = {
    nome: 'gatinha preta',
    imagem: './img/nomes_para_gatos_pretos_22397_orig.jpg',
    texto: 'Gatinha Preta, fêmea, 2 meses de vida. Acredita-se que gatos pretos oferecem proteção ao seus donos e seu lar, bem como consegue absorver energias indesejáveis, limpando o ambiente onde vive. O gato preto tende a ter uma personalidade tranquila, reservada e também muito amável e doce'
}

arrayGatinhos.push (gatinhoCinza, gatinhoLaranja, gatinhaPreta)

const principal = document.querySelector('main')

let containerPai = document.createElement('div')
containerPai.setAttribute('class', 'container')
principal.appendChild(containerPai)


console.log(containerPai)

let gatinhoDigitado 
arrayGatinhos.map (gatinhos => {
    containerPai.innerHTML += 
    `<div class="card">
    <img src="${gatinhos.imagem}">
    <h3> ${gatinhos.nome} </h3>
    <p> ${gatinhos.texto} </p>
</div>`
})


const buscarGato = () => {
    const btn = document.querySelector('#btn')
    const valorInput = document.querySelector('#txtBusca')
    btn.addEventListener(`click`, (event) => { 
        event.preventDefault()
        const gatosIguais = arrayGatinhos.filter((gato) => gato.nome.includes(valorInput.value))
    if (valorInput.value === "") {
        alert ("Gatinho não encontrado.")
    }
    else{
        gatosIguais.map(gato => {
            containerPai.innerHTML = 
            `<div class="card">
            <img src="${gato.imagem}">
        <h3> ${gato.nome} </h3>
        <p> ${gato.texto} </p>
        </div>`
        })
        console.log(gatosIguais)
    }
        console.log(valorInput.value)
    }) 
}

buscarGato()
const busca = document.getElementsByTagName('h3')

const cardGatinhos = document.querySelectorAll('.card')

let nomesCardGatinhos = []

for (let i in busca){
    nomesCardGatinhos.push(busca[i].innerText)
}
  let nomesCardGatinhos2 = nomesCardGatinhos.filter((itens) => 
     itens!== undefined
  )


 nomesCardGatinhos2 = nomesCardGatinhos2.map((itens) =>
     itens.toLowerCase()
 )

    const pesquisarGatinhos = (event) =>{
    const textoEscrito = valorInput.value.toLowerCase()
    event.preventDefault()
    cardGatinhos.forEach((itens) =>{
    })

    for (let i in cardGatinhos){
        if (nomesCardGatinhos2[i] === textoEscrito){
           cardGatinhos[i].classList.remove("sumir")
        }
      }
      const alerta = nomesCardGatinhos2.includes(textoEscrito)
      const limpar = () =>{
          if (textoEscrito === ""){
              cardGatinhos.forEach((itens) =>
                  itens.classList.remove("sumir")
              )
          } else if (textoEscrito !== "" && alerta === false){
              alert ("Gatinho não encontrado!")
           }
      } 
      limpar()
  }