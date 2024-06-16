// JAVASCRIPT PROGRAM

// VARIABLES
const body = document.body
const h1 = document.querySelector("h1");

// FUNCTIONS
function handleClick() {
    body.style.backgroundColor = "white";
    h1.style.color = "black";
}

// EVENTS
body.onclick = () => {
    handleClick();
}