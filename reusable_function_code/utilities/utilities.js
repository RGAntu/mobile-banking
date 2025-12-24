function getInputValueByID(id){
    const value = document.getElementById(id).value;
    const convertedValue = parseFloat(value);
    return  convertedValue;
}





document.getElementById("cashOut").style.display = "none"