"use strict";

const form = document.querySelector("#user-form");
const nameInput = document.querySelector("#name");
const errorMessage = document.querySelector("#error-message");

form.addEventListener ("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value;

    if (name === "") {
        errorMessage.textContent = "Ange ditt fullständiga namn";
        return;
    }

    errorMessage.textContent = "";

    console.log("Namn:", name);
    
});

form.addEventListener ("")



/*const getMessageButton = document.getElementById("getMessageButton");


getMessageButton.addEventListener("click", function (event) {
    event.preventDefault();

    alert("Tack för ditt meddelande!");


});*/