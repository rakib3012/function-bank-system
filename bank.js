

document.getElementById("btn").addEventListener('click', function(){
    const inputAmount = getInputFieldNumber('input');
    const depositAmount = getCurrentAmountFieldNumber('d-amount');

    if (isNaN(inputAmount)){
        alert('Enter a Number!!!')
        return ;
    }

    const totalDepositValue = depositAmount + inputAmount;
    setAmountElementValue('d-amount', totalDepositValue);

    const currentBalanceAmount = getCurrentAmountFieldNumber('b-amount');
    const totalBalance = currentBalanceAmount + inputAmount ;

    setAmountElementValue('b-amount', totalBalance)
})


document.getElementById('btn2').addEventListener('click', function (){
    const inputWithdrawAmount = getInputFieldNumber('input2');
    const currentWithdrawAmount = getCurrentAmountFieldNumber('w-amount')
    const newWithdrawAmount = currentWithdrawAmount + inputWithdrawAmount ;
    
    if (isNaN(inputWithdrawAmount)){
        alert('Enter a Number!!!')
        return ;
    }
    
    const currentBalance = getCurrentAmountFieldNumber('b-amount');
    
    if(inputWithdrawAmount>currentBalance){
        alert('Not Enough Balance!!!');
        return;
    }
    
    setAmountElementValue('w-amount', newWithdrawAmount)
    
    const newBalance = currentBalance - inputWithdrawAmount ; 
    setAmountElementValue('b-amount', newBalance);
})