const delay = 0.5; 
let i = 0; 
const message = prompt("Insira a mensagem:");
const limit = prompt("Quantas Vezes?") - 1;
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
