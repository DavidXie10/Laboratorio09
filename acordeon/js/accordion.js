
const BLOCK = "block";

const accordions = document.getElementsByClassName("accordion");

for(let accordion of accordions){
    accordion.addEventListener("click", () => {
        accordion.classList.toggle("active");
        const panel = accordion.nextElementSibling;
        if(panel.style.display === BLOCK){
            panel.style.display = "none";
        }else{
            panel.style.display = BLOCK;
        }
    });
}
