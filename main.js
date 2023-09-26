const adicionaItem = document.getElementById('adicionaItem')
const lista = document.querySelector('.lista')

adicionaItem.addEventListener('submit', (e)=>{
    e.preventDefault()
    
    console.log(e)
    inseridos(e.target.elements['nome'].value, e.target.elements['quantidade'].value)

})

const inseridos = (nome, quantidade)=>{
    const adicionaNome = document.createElement('li')
    adicionaNome.classList.add("item")
    
    const adicionaNum = document.createElement('strong')
    adicionaNum.innerHTML = quantidade
    adicionaNome.innerHTML += nome

    adicionaNome.appendChild(adicionaNum)
    lista.appendChild(adicionaNome)

}
