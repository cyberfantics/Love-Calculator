var screen = document.querySelector("#screen");

function display(value) {
    document.getElementById("screen").value += value;
}

function clearScreen() {
    document.querySelector("#owner").value = '';
    document.getElementById("screen").value = '';
}


function separate() {
    firstPart = document.getElementById("screen").value;
    document.getElementById("screen").value = '';
}

function result() {
    secondPart = document.querySelector("#screen").value;
    if (document.querySelector("#screen").value == '') {
        screen.style.color = "green";
        document.querySelector("#screen").value = '';
        document.querySelector("#screen").value = 'Please enter some valid information!!!';
    }

    else if (document.querySelector("#screen").value == 'Please enter some valid information!!!') {
        document.querySelector("#screen").value = 'Please enter some valid information!!!';
    }

    else if (firstPart == 'Please enter some valid information!!!') {
        document.querySelector("#screen").value = '';
    }

    else if (firstPart == 'h') {
        document.querySelector("#screen").value = '';
        firstPart = ''; secondPart = '';
    }

    else {
        screen.style.color = "red";
        document.getElementById("screen").value = firstPart + " and " + secondPart + " love %age is " + stringConvert(firstPart, secondPart) + "%";
        firstPart = 'h';
    }
}

function asciiValue(value) {
    var count = 0;
    var asciiTotal = 0;
    while (count < value.length) {
        asciiTotal += value.charCodeAt(count);
        count++;
    }
    return asciiTotal;
}

function findPercentage(value1, value2) {
    var total = value1.length + value2.length;
    return (total / (asciiValue(value1) + asciiValue(value2)) * 10000);
}

function stringConvert(value1, value2) {
    var last = String(findPercentage(value1, value2));
    return (last[0] + last[1]);
}

function createdBy() {
    document.querySelector("#owner").value = "<<<<<<<Mansoor Salfi>>>>>>>";
}

function backspace() {
    var onScreen = String(document.querySelector("#screen").value);
    var count = 0;
    var newString = '';
    while (count < onScreen.length - 1) {
        newString += onScreen[count];
        count++;
    }
    document.querySelector("#screen").value = newString;
}