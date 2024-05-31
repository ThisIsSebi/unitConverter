function convert() {
    const unit = document.getElementById("unit").value;
    const milesToKm = unit === "milesToKm";
    let result = 0;

    const inputValue = document.getElementById("userInput").value;

    if (milesToKm) {
        result = 1.60934 * inputValue;
    } else {
        result = inputValue / 1.60934;
    }

    const resultString = inputValue + " miles are " + result + " km";

    document.getElementById("resultElement").innerHTML = result;
}