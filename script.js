const header = document.querySelector("header");
window.addEventListener("scroll", () => {
        if(window.scrollY > 50){
            header.classList.add("floating-header");
        }
        else{
            header.classList.remove("floating-header");
        }
    }
);