const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", function (event) {
  event.preventDefault();

  const accountNumber = document.getElementById("accountNumber").value;
  const pinNumber = document.getElementById("pinNumber").value;
  const convertedPin = parseInt(pinNumber);
  if (accountNumber.length === 11) {
    if (convertedPin === 1234) {
      window.location.href = "./main.html";
    } else {
      alert("Invalid Pin");
    }
  } else {
    alert("Need valid account number");
  }
});
