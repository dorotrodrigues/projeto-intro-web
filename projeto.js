animal = { 
    nome: "Kisha",
    idade: 1,
    tempoDeVida:  18, 
    classe: "Mamífero",
    ambiente: "Doméstico",
    extincao: true
} 
animal1 = {
    nome: "Mileide",
    idade: 6,
    tempoDeVida:  17, 
    classe: "Mamífero",
    ambiente: "Doméstico",
    extincao: false
}
animal2 = {
    nome: "Mel",
    idade: 2,
    tempoDeVida:  15, 
    classe: "Mamífero",
    ambiente: "Doméstico",
    extincao: true
}
animal3 = {
    nome: "Chiara",
    idade: 1,
    tempoDeVida:  16, 
    classe: "Mamífero",
    ambiente: "Doméstico",
    extincao: false
}

const animais = []

// animais.push(animal)
// animais.push(animal1)
// animais.push(animal2)
// animais.push(animal3)

if(animal.extincao){
    animais.push(animal)
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

for(i in animais){
    console.log(`Dados do animal ${i+1}: Nome: ${animais[i].nome} Idade: ${animais[i].idade} Está em extinção? ${animais[i].extincao}`)

}

function retornarDados(objeto){
    return `Dados do animal: Nome: ${objeto.nome} Idade: ${objeto.idade} Está em extinção? ${objeto.extincao}`

}

console.log(retornarDados(animal))

function retornaObjeto (arrayObjeto, nome){
    let encontrou = false
    let objetosEncontrados = []
    let i = 0
    for(bicho of arrayObjeto){
        if (bicho.nome === nome) { 
            encontrou = true
            objetosEncontrados.push(bicho)
         }
    }
    if(encontrou){
        return objetosEncontrados
    }
    else{
        alert (`Nenhum nome encontrado.`)
    }
}

console.log(retornaObjeto(animais, "Kisha")) 
// console.log(retornaObjeto(animais, "Bia"))