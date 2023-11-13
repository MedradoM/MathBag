const darkwhite = document.getElementById('blk__wth')
const html = document.querySelector('html')
const textinho = document.getElementsByClassName('blk__wth_p')



darkwhite.addEventListener('click', (e)=>{
    e.preventDefault();
    if (html.getAttribute("color-mode") == "white"){
        html.setAttribute("color-mode", "dark")
    } else {
        html.setAttribute("color-mode", "white")
    }
})

