const contact_Buttons = document.querySelectorAll(".button_contact button");


contact_Buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        window.open("https://zalo.me/0968878272");
    })
})