var moviRender = (arr) => {
    searchResult.textContent = arr.length 
    list.innerHTML = ""
    
    arr.forEach(function (item){
        var Li = document.createElement("li")
        Li.classList = "list__item"
        
        var Img = document.createElement("img")
        Img.setAttribute("src", item.smallThumbnail)
        Img.classList.add("list__img")
        Li.appendChild(Img)
        
        var H4 = document.createElement("h4")
        H4.textContent = item.title
        H4.classList = "list__head"
        Li.appendChild(H4)
        
        
        var Div = document.createElement("div")
        Div.textContent = item.categories.join(", ")
        Li.appendChild(Div)
        
        list.appendChild(Li)
        
    })
}

moviRender(movies.slice(0, 10))