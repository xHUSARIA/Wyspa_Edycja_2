document.querySelectorAll("[data-copy]").forEach(element => {
    element.addEventListener("click", () => {
        navigator.clipboard.writeText(element.dataset.copy);

        element.textContent = "Skopiowano!";
        setTimeout( ()=> {
            element.textContent = "Skopiuj";
        }, 1200)
    });
});
