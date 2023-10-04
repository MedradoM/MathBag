const adicionaItem = document.getElementById('adicionaItem')
const lista = document.querySelector('.lista')
const categoria = document.getElementById('adicionaCategoria')
const storage = JSON.parse(localStorage.getItem("storage")) || []

storage.forEach( (element) => {
    inseridos(element)
} )

categoria.addEventListener('submit', (e)=>{
    e.preventDefault()
    
    alert("clicado")
})

adicionaItem.addEventListener('submit', (e)=>{
    e.preventDefault()

    const nome = e.target.elements['nome']
    const quantidade = e.target.elements['quantidade']
    const categoria = e.target.elements['categoria']
       
    console.log(e)
   
    const string = {
        "nome" : nome.value,
        "quantidade" : quantidade.value,
        "categoria" : categoria.value
    }

    storage.push(string)
    localStorage.setItem("storage", JSON.stringify(storage))
    inseridos(nome.value, quantidade.value, categoria.value)
    
    nome.value = "", quantidade.value = "", categoria.value = ""
})

function inseridos (nome, quantidade, categoria) {
    const adicionaNome = document.createElement('li')
    adicionaNome.classList.add("item")
    
    const adicionaNum = document.createElement('strong')
    const adicionaCat = document.createElement('span')
    adicionaCat.innerHTML = categoria
    adicionaNome.innerHTML += nome
    adicionaNum.innerHTML = quantidade

    adicionaNome.appendChild(adicionaNum)
    adicionaNome.appendChild(adicionaCat)
    lista.appendChild(adicionaNome)


}
