let mailInput = document.querySelector("#email")
let passInput = document.querySelector("#password")
let enterButton = document.querySelector("#btn")
let pass = localStorage.getItem("user_pass") || []
let email = localStorage.getItem("user_mail") || []


enterButton.addEventListener("click", () => {
    if(mailInput.value === email && passInput.value === pass){
        alert("Вход выполнен успешно!")
        location.href = "catalog.html"
    }else{
        alert("Такого пользователя не существует")
    }
})
