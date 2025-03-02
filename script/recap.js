document.getElementById('add-money').addEventListener("click", function (event) {
    event.preventDefault();
    const pin = document.getElementById("pin").value;
    

    const convertedPin = parseInt(pin);
    const amount = document.getElementById("amount").value;
    const convertedAmount = parseFloat(amount);
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainbalance = parseFloat(mainBalance);


    if (amount && pin) {
        if (convertedPin===1234) {
            const sum = convertedMainbalance + convertedAmount;
            document.getElementById("main-balance").innerText = sum;
        }
        else {
            alert("enter valit pin")
        }
    }

    else {
        alert("ente amount")
    }
})