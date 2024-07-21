// Wrap your code in an event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
    //Cart
    let cartIcon = document.querySelector("#cart-icon");
    let cart = document.querySelector(".cart");
    let closeCart = document.querySelector(".bx-x-circle");

    cartIcon.onclick = () => {
        console.log("Open Cart Clicked");
        cart.classList.add('cart-active');  // Use 'cart-active' instead of 'active'
    };

    closeCart.onclick = () => {
        console.log("Close Cart Clicked");
        cart.classList.remove('cart-active');  // Use 'cart-active' instead of 'active'
    };

});


//Cart Working JS
if(document.readyState =='loading')
{
    document.addEventListener('DOMContentLoaded',ready);
}
else
{
    ready();
}

//Making Functions
function ready()
{
    //Remove Items From Cart
    var removeCartButtons=document.getElementsByClassName('cart-remove');
    console.log(removeCartButtons);
    for(var i=0; i<removeCartButtons.length; i++)
    {
        var button=removeCartButtons[i];
        button.addEventListener('click',removeCartItem);       
    }
    //Quantity Changes
    var quantityInputs = document.getElementsByClassName('cart-quantity');
    for(var i=0; i< quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }
    //Add To Cart 
    var addCart = document.getElementsByClassName('add-cart');
    for(var i=0; i< addCart.length; i++){
        var button = addCart[i];
        button.addEventListener("click", addCartClicked)
    }
    //Buy Button Work
    document
    .getElementsByClassName('btn-buy')[0]
    .addEventListener('click', buyButtonClicked);
}
//Buy Button
function buyButtonClicked()
{
    alert('Your Order is Placed Sucessfully');
    var cartContent = document.getElementsByClassName('cart-content')[0];
    while(cartContent.hasChildNodes())
    {
        cartContent.removeChild(cartContent.firstChild);
    }
    updatetotal();
}
//Remove Items From Cart
function removeCartItem(event)
{
    var buttonClicked=event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}
//Quantity Changes
function quantityChanged(event){
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0 ){
        input.value = 1;
    }
    updatetotal();
}
var productimg;
var title;
var price ;
var shopProducts;
//Add To Cart Function
function addCartClicked(event){
    var button = event.target;
    shopProducts = button.parentElement;
    title = shopProducts.getElementsByClassName('product-title')[0].innerText;
    price = shopProducts.getElementsByClassName('price')[0].innerText;
    // Assign The Value To The Outer Variable
    productimg = shopProducts.getElementsByClassName('product-img')[0].src;
    addProductsToCart(title, price, productimg);
    updatetotal();
}
function addProductsToCart(title, price, productimg) {
    var cartShopBox = document.createElement('div');
    cartShopBox.classList.add('cart-box');
    var cartItems = document.getElementsByClassName('cart-content')[0];
    var cartItemNames = cartItems.getElementsByClassName('cart-product-title');

    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('You have already added this item to cart');
            return;
        }
    }

    var cartBoxContent = `
        <img src="${productimg}" alt="" class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <input type="number" value="1" class="cart-quantity">
        </div>
        <!--Remove-->
        <i class='bx bxs-trash-alt cart-remove'></i>`;

    cartShopBox.innerHTML = cartBoxContent;
     // Append The CartShopBox To CartItems
    cartItems.appendChild(cartShopBox); 

    cartShopBox
        .getElementsByClassName('cart-remove')[0]
        .addEventListener('click', removeCartItem);
    cartShopBox
        .getElementsByClassName('cart-quantity')[0]
        .addEventListener('change', quantityChanged);

    updatetotal();
}
function updatetotal(){
    var cardContent = document.getElementsByClassName('cart-content')[0];
    var cardBoxes = document.getElementsByClassName('cart-box');
    var total = 0; 
    for(var i=0; i< cardBoxes.length; i++){
        var cartBox = cardBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace('$',''));
        var quantity =quantityElement.value;
        total = total + (price*quantity);
    }
        total = Math.round(total *100)/100;
        document.getElementsByClassName('total-price')[0].innerText = '$' + total;
    
}
