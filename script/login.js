// console.log('hero')

// step 1 = Id k dhorchi getElementById diya

document.getElementById('Login-btn')
.addEventListener('click', function (event) {
    event.preventDefault();
    
    const AcountNumber = document.getElementById("Acount-number").value;
    const pin = document.getElementById("pin").value;

    const couvertedpin=parseInt(pin)
    if (AcountNumber.length===11) {
        if (couvertedpin===1234) {
            window.location.href="./main.html"
        }
        else {
            alert("pin tikh nai")
        }
    }  
    else {
        alert("need valid Acount Number")
    } 
})