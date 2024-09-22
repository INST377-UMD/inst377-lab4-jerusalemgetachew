// Alert Me Section
function alertName() {
    const name = document.getElementById('name').value;
    if (name) {
        alert(`Hi ${name}!`);
    } else {
        alert('Please enter your name.');
    }
}

// Change Color Section
let isBlue = true;
function changeColor() {
    if (isBlue) {
        document.body.style.backgroundColor = "green";
    } else {
        document.body.style.backgroundColor = "blue";
    }
    isBlue = !isBlue;  // Toggle the color
}

// Text Tester Section
function validateText() {
    const text = document.getElementById('testText').value;
    const validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    
    if (validation.test(text)) {
        alert("Special characters are not allowed!");
    } else {
        alert("Text is valid!");
    }
}

// Add Text Section
function addText() {
    document.querySelector('h1').innerText += " Add Text";
}
