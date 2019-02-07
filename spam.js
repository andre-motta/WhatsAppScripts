const delay = 0.5; //delay in seconds
let i = 0; // counter
const message = prompt("Insert the message:");
const limit = prompt("How many times?") - 1;
const spam = setInterval(() => {
    if (i >= limit) clearInterval(spam);
    window.InputEvent = window.Event || window.InputEvent;
    let event = new InputEvent('input', {
        bubbles: true
    });
    let textbox = $('div._2S1VP');
    textbox.textContent = message;
    textbox.dispatchEvent(event);
    $("button._35EW6").click();
    i++;
}, delay * 1000);
