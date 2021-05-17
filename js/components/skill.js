function showUpWindow() {
const clc = document.querySelector(".cancel");
const left_container = document.querySelector(".left_container");

clc.addEventListener("click", ()=> {
    

    
    if(left_container.classList.contains("off")) {
        left_container.classList.remove("off");
        left_container.classList.add("active");
     
        
    } else {
        left_container.classList.add("off");
        left_container.classList.remove("active");
    

    }
});
}


export {showUpWindow};
