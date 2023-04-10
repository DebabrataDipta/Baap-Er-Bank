//step-1:set a click function to get the event 
document.getElementById('submit-btn').addEventListener('click', function(){
    //step-2:get the email address inside the email input field
    //always use .value to get the value from the function
    const userEmail=document.getElementById('user-email');
    const getEmail=userEmail.value;

    // step-3: get the password
    // 3.a)Set the id to html element
    // b)Get the element
    // c)get the value from the element
    const passwordField=document.getElementById('user-password');
    const passWord=passwordField.value;

    // step-4:verify the email and password
    if(getEmail === 'debabratadash93@gmail.com' && passWord === '2023'){
        window.location.href='bank.html';
    }
    else{
        alert('Wrong email or password.Try again to continue');
    }
})