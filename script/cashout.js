document
  .getElementById("cashOutBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashWithdraw = document.getElementById("cash-withdraw").value;
    
    const convertedWithdraw = parseInt(cashWithdraw);
    

    const mainBalance = document.getElementById("mainBalance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    const pin = document.getElementById("cashOutPin").value;
  
    const convertedPin = parseInt(pin);
    

    if (cashWithdraw && pin) {
      if (convertedPin === 1234) {
        const sum = convertedMainBalance - convertedWithdraw;
        document.getElementById("mainBalance").innerText = sum;
      } else {
        alert("Invalid Pin ");
      }
    } else {
      alert("Enter amount");
    }
  });
