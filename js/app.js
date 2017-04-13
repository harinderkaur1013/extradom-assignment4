var bColor = document.getElementById("color");
var box = document.getElementById('box');

function changeBorder() {
    if (bColor.value === 'black') {
        box.style.borderColor = 'black';
    } else if (bColor.value === 'red') {
        box.style.borderColor = "red";
    } else {
        alert("enter valid color")
    }
}

document.getElementById("submitColor").addEventListener("click", changeBorder);
