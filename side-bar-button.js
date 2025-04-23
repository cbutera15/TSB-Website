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
    }else{
        showing = true
        sidebar.classList.add("showing")
    }
    console.log(sidebar.classList)
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