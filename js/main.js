var moviRender = (arr) => {
    searchResult.textContent = arr.length 
    list.innerHTML = ""
    
    arr.forEach(function (item){
        var Li = document.createElement("li")
        Li.classList = "list__item"
        
        var IMG = document.createElement("img")
        IMG.setAttribute("src", item.smallThumbnail)
        IMG.classList.add("list__img")
        Li.appendChild(IMG)
        
        var H4 = document.createElement("h4")
        H4.textContent = item.title
        H4.classList = "list__head"
        Li.appendChild(H4)
        
        
        var DIV = document.createElement("div")
        DIV.textContent = item.categories.join(", ")
        Li.appendChild(DIV)
        
        list.appendChild(Li)
        
    })
}

moviRender(movies.slice(0, 10))