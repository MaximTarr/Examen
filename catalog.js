let select = document.querySelector("#filter_select")
let sum = document.querySelector("#sum_span")
let cartDiv = document.querySelector("#cartDiv")
let input = document.querySelector("#input")
let arr = []


async function drawProducts(){
    let response = await fetch('https://dummyjson.com/products?limit=100')
    let data = await response.json();
    for(let product of data.products){
        if(product.category === select.value){
            cartDiv.innerHTML += `
            <div class="div_main">
            <p>${product.title}</p>
            <p>${product.price} $</p>
            <p>${product.category}</p>
            <img class="image" width="100px" height="100px" src="${product.thumbnail}">
            
            </div>
            <button id="addToCartBtn" onClick="asdf">Добавить в корзину</button>
            <hr>
            `   
        }
    }
}
let toCartBtn = document.querySelector("#addToCartBtn")

drawProducts()
select.addEventListener("change", () => {
    cartDiv.innerHTML = ""
    drawProducts()
})

input.addEventListener("change", () => {
    cartDiv.innerHTML = ""
    drawProducts()
})



select.innerHTML += `
    <option>smartphones</option>
    <option>laptops</option>
    <option>fragrances</option>
    <option>skincare</option>
    <option>groceries</option>
    <option>home-decoration</option>
`











