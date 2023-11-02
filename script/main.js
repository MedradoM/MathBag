const adicionaItem = document.getElementById('adicionaItem')
const lista = document.querySelector('.lista')
const categoria = document.getElementById('adicionaCategoria')
const aumentar = document.getElementsByClassName('aumentar')
const enviar = document.getElementsByClassName('enviar')
const storage = JSON.parse(localStorage.getItem('storage')) || []

storage.forEach( (element) => {
    inserir(element.nome, element.quantidade, element.categoria)
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
    
    inserir(string.nome, string.quantidade, string.categoria)
    
    nome.value = "", quantidade.value = "", categoria.value = ""
})
   






function inserir (nome, quantidade, categoria){
    const criaTr = document.createElement('tr')
    const namezin = document.createElement('td')
    const numzin = document.createElement('td')
    const cat = document.createElement('td')
    const deleta = document.createElement('button')
    deleta.innerHTML = "X"


    deleta.addEventListener('click', (e)=>{
        console.log(this.storage)
    })
     
    cat.innerHTML = categoria
    numzin.innerHTML = quantidade
    namezin.innerHTML = nome
     
    criaTr.appendChild(namezin) 
    criaTr.appendChild(numzin)
    criaTr.appendChild(cat)
    criaTr.appendChild(deleta)
    lista.appendChild(criaTr)
}

