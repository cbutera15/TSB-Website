const div = document.getElementById("sbbtndiv")
const button = document.getElementById("sidebarbtn")
const sidebar = document.getElementById("sidebar")

let showing = false
let fixed = false

button.addEventListener('click', () => toggleSideBar());

function toggleSideBar(){
    if(showing){
        showing = false
        sidebar.classList.remove("showing")
        gsap.to(".sidebar", {x: "-=20vw", duration: 1})
        gsap.to(div, {x: "-=15vw", duration: 1})
    }else{
        showing = true
        sidebar.classList.add("showing")
        gsap.to(sidebar, {x: "+=20vw", duration: 1})
        gsap.to(div, {x: "+=15vw", duration: 1})
    }
}

function toggleFixed(){
    if(fixed){
        div.classList.remove("fixed")
    }else{
        div.classList.add("fixed")
    }
}

//controls div scrolling
gsap.registerPlugin(ScrollTrigger);
document.addEventListener("DOMContentLoaded", function() {
    ScrollTrigger.create({
        trigger: "#trigger-e",
        start: "top",
        onEnter: toggleFixed()
    })

});