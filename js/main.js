"use strict";

const form = document.querySelector("#user-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector ("#email");
const messageInput = document.querySelector ("#message");
const errorMessage = document.querySelector("#error-message");

form.addEventListener ("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const messafe =messageInput.value.trim();

    //Namn kontroll
    if (name === "") {
        errorMessage.textContent = "Ange ditt fullständiga namn";
        return;
    }

    //e-post kontroll
    if (email === "") {
        errorMessage.textContent = "Ange en e-postadress"
        return;
    }

    //Meddelande kontroll (minst 10 tecken)
    if (messageInput.length <10) {
        errorMessage.textContent = "Meddelande måste innehålla minst 10 tecken.";
        return;
    }
    
    //Om allt ok
    errorMessage.textContent = "";

    console.log("Namn:", name);
    console.log("Mejladress:", email);
    console.log("Meddelande:", message);
    alert("Meddelandet skickat!");
    
    
});


/*const getMessageButton = document.getElementById("getMessageButton");


getMessageButton.addEventListener("click", function (event) {
    event.preventDefault();

    alert("Tack för ditt meddelande!");


});*/