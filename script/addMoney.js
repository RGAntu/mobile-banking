document.getElementById('addMoney').addEventListener("click", function(event){
    event.preventDefault();
    const amount= document.getElementById("amount").value;
    const convertedAmount = parseInt(amount);

    // const account = document.getElementById("AccountNumber").value;
    
    const pin = document.getElementById("pin").value;
    const convertedPin = parseInt(pin);

    const mainBalance = document.getElementById("mainBalance").innerText;
    const convertMainBalance = parseFloat(mainBalance);
    console.log(convertMainBalance)

    if(amount && pin){
        if(convertedPin === 1234){
        const sum = convertedAmount + convertMainBalance;
        document.getElementById("mainBalance").innerText = sum;
    }
    else{
        alert("Invalid pin")
    }
    }
    else{
        alert("Enter amount")
    }
})