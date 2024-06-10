function calc() {
    const height = document.getElementById("height") //altura
    const weight = document.getElementById("weight") //peso

    if (height.value == '' && weight.value == '') {
        alert(`You must fill in all fields`)
        final__result.hidden = true
        result__text = true
    }

    console.log(`A altura é de: ${height.value}`)
    console.log(`O peso é de: ${weight.value}`)

    let result = weight.value / (height.value * height.value)
    let res__string = result.toString() //convertendo o número para string para selecionar o resultado final
    let conv__result = res__string.substring(4, 6) + '.' + res__string.substring(6, 8)

    console.log(result)

    let final__result = document.getElementById("final__result") // campo que mostrará o resultado final para o usuário
    
    let result__text = document.getElementById("result__text") //texto que ficará acima do resultado final

    final__result.hidden = false
    result__text = false   

    final__result.value = conv__result
}