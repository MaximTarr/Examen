let sendCodeBtn = document.querySelector("#send_code_btn")
let registrationBtn = document.querySelector("#registration_btn")
let emailInput = document.querySelector("#email")
let passwordInput = document.querySelector("#password")
let codeInput = document.querySelector("#code")


const sendEmail = (email, message, name) => {
    const templateParams = {
        email: email,
        message: message,
        name: name
    };
     
    emailjs.send('service_g35awv6', 'template_lhnireh', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        });
}
 
    


let num = Math.floor(Math.random() * 1000000)
console.log(num)

sendCodeBtn.addEventListener("click", () => {
    sendEmail(emailInput.value, num, "Это ваш код")

    registrationBtn.removeAttribute("hidden")
    sendCodeBtn.setAttribute("hidden", 0)
})

registrationBtn.addEventListener("click", () => {
    if(codeInput.value == num){
            let newEmail = emailInput.value
            let newPassword = passwordInput.value
        
        JSON.stringify(localStorage.setItem("user_mail", newEmail))
        JSON.stringify(localStorage.setItem("user_pass", newPassword))
        alert("registration complete")
        location.href="enter.html"
    }else{ 
        alert("Something went wrong")
    }
})
