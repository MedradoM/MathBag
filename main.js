const adicionaItem = document.getElementById('adicionaItem')
const lista = document.querySelector('.lista')
const categoria = document.getElementById('adicionaCategoria')
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

// function inseridos (nome, quantidade, categoria) {
//     const adicionaNome = document.createElement('li')
//     adicionaNome.classList.add("item")
    
//     const adicionaNum = document.createElement('strong')
//     const adicionaCat = document.createElement('span')
//     adicionaCat.innerHTML = categoria
//     adicionaNome.innerHTML += nome
//     adicionaNum.innerHTML = quantidade
//     const deleta = document.createElement('button')
//     deleta.innerHTML = "X"

//     deleta.addEventListener('click', (e)=>{
//         console.log(storage.length)
//     })


//     adicionaNome.appendChild(adicionaNum)
//     adicionaNome.appendChild(adicionaCat)
//     adicionaNome.appendChild(deleta)
//     lista.appendChild(adicionaNome)
// }


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

//-----------------------------------------------------------------------
/*
var btn = document.querySelector("#btn");

function limpar(){
    document.querySelector("#nome").value = "";
    document.querySelector("#comentario").value = "";
}
btncan.addEventListener("click",(e)=>{
    e.preventDefault();
    this.limpar();
});

btn.addEventListener("click",(e)=>{
     //previne recarregar a bagina quando clicar no botao
     e.preventDefault();
     var nome = document.querySelector("#nome").value;
     var comentario = document.querySelector("#comentario").value;

    var usuarios = new Array();
    //se ja usuarios ja existe em localstorage se sim vou recuperar
    if(localStorage.hasOwnProperty("usuarios")){
     //converter string para objeto
         usuarios=JSON.parse(localStorage.getItem("usuarios"));
    }
    //empurrando para array
    usuarios.push(nome, comentario);
  
    limpar();
    
    //add um novo objeto ao array criado
    localStorage.setItem("usuarios",JSON.stringify(usuarios));
    
    
    for(var i in usuarios){
    //selecionando
    var di = document.querySelector("#conteudo");
    
    //criando elemento fieldset
    var commit = document.createElement("fieldset");
    di.textContent ="";
    //criando h3
    var resulNome = document.createElement("h3");
    //criando p
    var resulCommit = document.createElement("p");
    //criando nós com nome/comentario e variavel
    var contNome = document.createTextNode("nome : "+nome);
    var contCommit = document.createTextNode(" Comentario : " +comentario);
    
    //di pai de commit
    di.appendChild(commit);
    //commit pai de resultNome e resultCommit
    commit.appendChild(resulNome);
    commit.appendChild(resulCommit);
    //results pais dos conts 
    resulNome.appendChild(contNome);
    resulCommit.appendChild(contCommit);
    
   
    console.log( usuarios[i]);
    limpar();
    }

    
   
    
});




function salvar(){
  
}
function apagar(){

}
function exibir(){
    
}

*/