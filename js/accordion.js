const accordions = document.querySelectorAll(".accordion");

if(accordions) {
    const openAccordion = (accordion) => {
        const content = accordion.querySelector(".accordion__content");
        accordion.classList.add("open");
        content.style.maxHeight = content.scrollHeight + "px";
    };
    
    const closeAccordion = (accordion) => {
        const content = accordion.querySelector(".accordion__content");
        accordion.classList.remove("open");
        content.style.maxHeight = null;
    };
    
    accordions.forEach((accordion) => {
        const intro = accordion.querySelector(".accordion__control");
        const content = accordion.querySelector(".accordion__content");
    
        intro.onclick = () => {
            if (content.style.maxHeight) {
                closeAccordion(accordion);
            } else {
                accordions.forEach((accordion) => closeAccordion(accordion));
                openAccordion(accordion);
            }
        };
    });
}