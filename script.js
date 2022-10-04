function adicionaItem(event){
    const novoItem = document.createElement("article")
    novoItem.classList.add("item")
    novoItem.setAttribute("onclick", "removeItem(event)")
    
    const elementoReferencia = document.getElementById("container")

    elementoReferencia.appendChild(novoItem)

    if(event){
        elementoReferencia.insertAdjacentElement("beforeend", novoItem)
    }
}

function removeItem(event){
    event.target.remove()
}