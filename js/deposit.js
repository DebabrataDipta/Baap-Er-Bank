// 1.add deposit button to deposit 
document.getElementById('deposit-btn').addEventListener('click',function(){
    //step 2:get the value;
    const depositMoney=document.getElementById('deposit-field');
    const newDepositAmountString=depositMoney.value;
    const newDepositAmount=parseFloat(newDepositAmountString);
    
    // step-3:Get the current deposit total 
    //for non-input (element other then input/text-area) use innerText to get the text
    const depositTotalElement=document.getElementById('deposit-total');
    const previousDepositTotalString=depositTotalElement.innerText;
    const previousDepositTotal=parseFloat(previousDepositTotalString);
    const currentDepositTotal=previousDepositTotal+newDepositAmount;
    depositTotalElement.innerText=currentDepositTotal;

    //step-5: set the balance
    const balanceTotalElement=document.getElementById('balance-total');
    const previousBalanceTotalString=balanceTotalElement.innerText;
    const previousBalanceTotal=parseFloat(previousBalanceTotalString);
    //Step-6:Calculate balance total
    const currentBalanceTotal=previousBalanceTotal+newDepositAmount;
    balanceTotalElement.innerText=currentBalanceTotal;

    //clear the deposit field
    depositMoney.value='';
})