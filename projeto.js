const nome = "Kisha"
let nomeCientifico = "Felis Catus" 
let tempoDeVida =  18 
let classe = "Mamífero"
let ambiente = "Doméstico"
let extincao = false


const nome1 = "Mileide"
const idade1 = 6
const estaEmExtincao1 = false

const nome2 = "Mel"
const idade2 = 2
const estaEmExtincao2 = true

const nome3 = "Chiara"
const idade3 = 1
const estaEmExtincao3 = false


const calculoMedia = (tempoDeVida + idade1 + idade2 + idade3) / 4
console.log(calculoMedia) 


const verificaExtincao = extincao && estaEmExtincao1 && estaEmExtincao2 && estaEmExtincao3
console.log(verificaExtincao)


const comidasGato = ["Ração", "Petisco", "Leite", "Peixe"]
const brinquedosGato = ["Bola", "Rato", "Penas"]


const nomeToUpperCase = nome.toUpperCase()
const nomeToUpperCase1 = nome1.toUpperCase()
const nomeToUpperCase2 = nome2.toUpperCase()
const nomeToUpperCase3 = nome3.toUpperCase()

console.log("Nome do animal: ", nome.toUpperCase(), "\n", "Nome científico: ", nomeCientifico, "\n", "Tempo médio de vida: ", tempoDeVida, "\n", "Classe: ", classe, "\n", "Ambiente que convive: ", ambiente, "\n", "Está em extinção? ", extincao, "\n", "Comidas: ", comidasGato, "\n", "Brinquedos: ", brinquedosGato)

console.log("Nome do animal : ", nome1.toUpperCase(), "\n", "idade: ", idade1, "\n", "Está em extinção? ", estaEmExtincao1, "\n", "Comidas: ", comidasGato, "\n", "Brinquedos: ", brinquedosGato)

console.log("Nome do animal: ", nome2.toUpperCase(), "\n", "Idade: ", idade2, "\n", "Está em extinção? ", estaEmExtincao2, "\n", "Comidas: ", comidasGato, "\n", "Brinquedos: ", brinquedosGato)

console.log("Nome do animal: ", nome3.toUpperCase(), "\n", "Idade: ", idade3, "\n", "Está em extinção? ", estaEmExtincao3, "\n", "Comidas: ", comidasGato, "Brinquedos: ", brinquedosGato)