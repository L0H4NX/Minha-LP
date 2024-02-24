var containerModal = document.getElementById("containerModal")
var btn = document.querySelector("#show-menu-botao")
var btnClose = document.querySelector("#close-modal")
var conteudoModal = document.querySelector("#conteudo-modal")

btn.addEventListener("click", () => containerModal.classList.add("open-modal"))

btnClose.addEventListener("click", function(){
    containerModal.classList.remove("open-modal")
})

conteudoModal.addEventListener("click", (e) => {
    if(e.target.id == containerModal){
        console.log(e.target.id)
        containerModal.classList.remove("openModal")
    }
    
})

//Menu lateral
var btnOpenMenu = document.querySelector("#btn-open-menu") //botao para abrir o menu
var menu = document.querySelector("#menu-cabecario") // menu ajustado
btnOpenMenu.addEventListener("click",  function(){
    menu.classList.toggle("active")
})

//Botao color

var red = document.querySelector("#red")
var green =  document.querySelector("#green")
var blue =  document.querySelector("#blue")

red.addEventListener("click", () => {
    red.classList.toggle("btn-class-red")
})
green.addEventListener("click", ()=>{
    green.classList.toggle("btn-class-green")
} )
blue.addEventListener("click", () => {
    blue.classList.toggle("btn-class-blue")

})
