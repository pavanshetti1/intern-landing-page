window.addEventListener("scroll", ()=>{
    const navbar = document.querySelector("nav");
    if(window.scrollY > 500){
        navbar.classList.add("sticky")
    }
    else{
        navbar.classList.remove("sticky");
    }
});