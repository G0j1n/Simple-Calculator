let displayValue = "";

function appendNumber(number) {
    displayValue += number;
    document.getElementById('display').value = displayValue;
}

function appendOperator(operator) {
    displayValue += " " + operator + " ";
    document.getElementById('display').value = displayValue;
}

function appendDot() {
    if (!displayValue.endsWith(".")) {
        displayValue += ".";
        document.getElementById('display').value = displayValue;
    }
}

function clearDisplay() {
    displayValue = "";
    document.getElementById('display').value = displayValue;
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').value = displayValue;
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = "Error";
    }
}
