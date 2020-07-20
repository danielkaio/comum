let txt = document.querySelectorAll('p')


for(let i = 0; i<txt.length; i++){
    let itens = txt[i]
    itens.addEventListener('click',()=>{
        itens.style.color="orange"
    })

    itens.addEventListener('mousemove',()=>{
        itens.style.color="green"
    })
}
