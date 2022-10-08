animal = { 
    nome: "Kisha",
    idade: 1,
    tempoDeVida:  18, 
    classe: "Mamífero",
    ambiente: "Doméstico",
    extincao: false
} 
animal1 = {
    nome: "Mileide",
    idade: 6,
    extincao: false
}
animal2 = {
    nome: "Mel",
    idade: 2,
    extincao: true
}
animal3 = {
    nome: "Chiara",
    idade: 1,
    extincao: false
}

const animais = []

animais.push(animal)
animais.push(animal1)
animais.push(animal2)
animais.push(animal3)

if(animal.extincao){
    animais.push(animais)
} else {
    alert("Item não adicionado.")
}

if(animal1.extincao){
    animais.push(animal1)
} else {
    alert("Item não adicionado.")
}

if(animal2.extincao){
    animais.push(animal2)
} else {
    alert("Item não adicionado.")
}

if(animal3.extincao){
    animais.push(animal3)
} else {
    alert("Item não adicionado.")
}

console.log(animais)