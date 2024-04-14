function convert() {
    var temp = parseFloat(document.getElementById("inputTemp").value);
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;
    var resultElement = document.getElementById("result");

    if (isNaN(temp)) {
        resultElement.value = "Please enter a valid number!";
        return;
    }

    if (fromUnit === "celsius") {
        if (toUnit === "fahrenheit") {
            resultElement.value = (temp * 9 / 5) + 32 + " Fahrenheit";
        } else if (toUnit === "kelvin") {
            resultElement.value = temp + 273.15 + " Kelvin";
        } else {
            resultElement.value = temp + " Celsius";
        }
    } else if (fromUnit === "fahrenheit") {
        if (toUnit === "celsius") {
            resultElement.value = (temp - 32) * 5 / 9 + " Celsius";
        } else if (toUnit === "kelvin") {
            resultElement.value = (temp - 32) * 5 / 9 + 273.15 + " Kelvin";
        } else {
            resultElement.value = temp + " Fahrenheit";
        }
    } else if (fromUnit === "kelvin") {
        if (toUnit === "celsius") {
            resultElement.value = temp - 273.15 + " Celsius";
        } else if (toUnit === "fahrenheit") {
            resultElement.value = (temp - 273.15) * 9 / 5 + 32 + " Fahrenheit";
        } else {
            resultElement.value = temp + " Kelvin";
        }
    }
}
