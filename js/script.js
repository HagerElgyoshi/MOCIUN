var allProducts = document.querySelectorAll(".dif h2")
var showProducts = document.querySelector("#products")
var showPriceBtn = document.querySelector("#btn")
var divPrice = document.querySelector("#productsPrice")
var totalPrice = 0

allProducts.forEach(function(item){
    item.onclick = function (){
        showProducts.innerHTML += item.textContent + "////"
        totalPrice += +(item.getAttribute("price"))
        console.log(totalPrice)
    }

    if(showProducts.innerHTML != ""){
        showPriceBtn.style.display = "block"
    }
}

)

showPriceBtn.onclick = function() {
    divPrice.innerHTML = "Price: " + totalPrice + "$"
     console.log(divPrice)
}


