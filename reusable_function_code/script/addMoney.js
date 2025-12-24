document.getElementById("addMoney").addEventListener("click", function (event) {
  event.preventDefault();
  const amount = getInputValueByID("amount");
  const pin = getInputValueByID("pin");
  const accountNum = document.getElementById("accountNumber").value;
  console.log(accountNum)
  


  if(accountNum.length === 11){
    if(pin === 1234){
        alert("hello")
    }
    else{
        alert("please Enter a valid Pin")
    }
  }
  else{
    alert("Invalid Number")
  }
  
});
