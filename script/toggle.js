// document.getElementById('bd-btn').addEventListener("click", function(){
//    document.getElementById("bd").style.display = "block";
//    document.getElementById("usa").style.display = "none"
// })


// document.getElementById("usa-btn").addEventListener("click", function (){
//     document.getElementById("bd").style.display = "none";
//    document.getElementById("usa").style.display = "block"
// })


// initially add money hidden 
document.getElementById('AddMoney').style.display = "none"

document.getElementById('add-money-box').addEventListener("click", function(){
    document.getElementById('cashOut').style.display = "none"
    document.getElementById('AddMoney').style.display = "block"
})
document.getElementById('cash-out-box').addEventListener("click", function(){
    document.getElementById('AddMoney').style.display = "none"
    document.getElementById('cashOut').style.display = "block"
})