let select = document.querySelector("#filter_select")
let sum = document.querySelector("#sum_span")
let catalogDiv = document.querySelector("#cartDiv")
let input = document.querySelector("#input")



async function drawProducts(){
    let response = await fetch('https://dummyjson.com/products?limit=100')
    let data = await response.json();
    for(let product of data.products){
        if(product.category === select.value){
            catalogDiv.innerHTML += `
            <div class="div_main">
            <p>${product.title}</p>
            <p>${product.price} $</p>
            <p>${product.category}</p>
            <img class="image" width="100px" height="100px" src="${product.thumbnail}">
            
            </div>
            <button id="addToCartBtn" onClick="addToCart()">Добавить в корзину</button>
            <hr>
            `   
        }
    }
}

// async function addToCart(){
//     console.log("hello")
//     let response = await fetch('https://dummyjson.com/products?limit=100')
//     let data = await response.json();

//     for(let product of data.products){
//         arr.push(product)
//     }
//     console.log(arr)
// }






drawProducts()
select.addEventListener("change", () => {
    catalogDiv.innerHTML = ""
    drawProducts()
})

input.addEventListener("change", () => {
    catalogDiv.innerHTML = ""
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


function locationBtn(){
    localStorage.setItem("cartArr", arr)
}









