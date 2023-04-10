// step 1:connect the withdraw button to event handler 
document.getElementById('Withdraw-btn').addEventListener('click',function(){
//    step 2:get the value
    const withdrawAmount=document.getElementById('withdraw-field');
    const newWithdrawAmountString=withdrawAmount.value;
    const newWithdrawAmount=parseFloat(newWithdrawAmountString);

    //Set the balance
    const withdrawTotalAmount=document.getElementById('withdraw-total');
    const prevWithdrawTotalAmountString=withdrawTotalAmount.innerText;
    const prevWithdrawTotalAmount=parseFloat(prevWithdrawTotalAmountString);




    // set the amount to 0
    withdrawAmount.value=''; 
    
    //Set the balance amount
    const balanceTotalAmount=document.getElementById('balance-total');
    const previousBalanceTotalString=balanceTotalAmount.innerText;
    const previousBalanceTotal=parseFloat(previousBalanceTotalString);
    if(newWithdrawAmount>previousBalanceTotal){
        alert('You doesnot have sufficient money on your account');
        return;
    }
        const currentWithdrawTotal=prevWithdrawTotalAmount+newWithdrawAmount;
    withdrawTotalAmount.innerText=currentWithdrawTotal;

    const currentBalanceAmount=previousBalanceTotal-newWithdrawAmount;
    balanceTotalAmount.innerText=currentBalanceAmount;
    
    

})
