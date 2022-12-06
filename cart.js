let madeOrder = document.querySelector("#order")
let email = localStorage.getItem("user_mail") || []

const sendEmail = (email, message, name) => {
    const templateParams = {
        to_email: email,
        message: message,
        name: name
    };
     
    emailjs.send('service_g35awv6', 'template_c259zgl', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        });
}










madeOrder.addEventListener("click", () => {
    sendEmail(email, )
})















































async function drawCartCategories(category){
    let cart = JSON.parse(localStorage.getItem("cartProductIds")) || [];
    let response = await fetch("https://dummyjson.com/products?limit=100");
    let data = await response.json();
    console.log(data.products);

    let totalSum = 0;
    let cartArray = [];
    
        for(let item of cart){
            cartArray.push(data.products.filter(product => product.id == item.productId)[0]);   
        }   

        for(let products of cartArray){
            if(category){
                if(category == products.category){
                    cartDiv.innerHTML += `
                    <div class="products">
                    <div class ="image" style="background-image: url(${products.images[0]});"></div>
                    <span class="title">${products.title}</span><hr>
                    <span class="price">${products.price}$</span><br><br>
                    <span class="title">Category: </span>${products.category}
                </div>
                    `
                }
            }
            totalSum += products.price
        }
    

};