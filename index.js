

function getInputFieldNumber(Input){
    const inputField = document.getElementById(Input);
    const inputFieldValue = inputField.value ;
    const inputFieldValueNumber = parseFloat(inputFieldValue);

    inputField.value = '';

    return inputFieldValueNumber ;
}


function getCurrentAmountFieldNumber(Id){
    const currentAmountField = document.getElementById(Id);
    const currentAmountFieldValue = currentAmountField.innerText ;
    const currentAmountFieldValueNumber = parseFloat( currentAmountFieldValue);

    return currentAmountFieldValueNumber ;
}


function setAmountElementValue(elementId,newValue){
    const elementField= document.getElementById(elementId);
    elementField.innerText = newValue ;
}

 
 