const adicionaItem = document.getElementById('adicionaItem')
const lista = document.querySelector('.lista')
const categoria = document.getElementById('adicionaCategoria')
const aumentar = document.getElementsByClassName('aumentar')
const enviar = document.getElementsByClassName('enviar')
const storage = JSON.parse(localStorage.getItem('storage')) || []


storage.forEach( (element) => {
    inserir(element)
} )

while (storage.lenght > 5){
    storage.splice(5,1)
}


categoria.addEventListener('submit', (e)=>{
    e.preventDefault()
    
    alert("clicado")
})



adicionaItem.addEventListener('submit', (e)=>{
    e.preventDefault()

    const nome = e.target.elements['nome']
    const quantidade = e.target.elements['quantidade']
    const categoria = e.target.elements['categoria']
        
    
    const string = {
        "nome" : nome.value,
        "quantidade" : quantidade.value,
        "categoria" : categoria.value
    }

    storage.push(string)
    
    inserir(string)
    localStorage.setItem("storage", JSON.stringify(storage))
    
    nome.value = "", quantidade.value = "", categoria.value = ""
})
   


function inserir (item){
    const criaTr = document.createElement('tr')
    const namezin = document.createElement('td')
    const numzin = document.createElement('td')
    const cat = document.createElement('td')
    criaTr.classList.add("item")
     
    cat.innerHTML = item.categoria
    numzin.innerHTML = item.quantidade
    namezin.innerHTML = item.nome

    criaTr.appendChild(numzin)
    criaTr.appendChild(namezin) 
    criaTr.appendChild(cat)
    criaTr.appendChild(limpar(item.id))
    lista.appendChild(criaTr)
}

function limpar (id) {
    const deleta = document.createElement('button')
    deleta.innerHTML = "X"

    deleta.addEventListener('click', ()=>{
       deleta.parentElement.remove();

       storage.splice(storage.findIndex(elemento => elemento.id === id), 1)
       localStorage.setItem("storage", JSON.stringify(storage))
    })
    return deleta;
}


