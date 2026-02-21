let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price){
  cart.push({name, price});
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to Cart");
}

if(document.getElementById("cartItems")){
  let total = 0;
  cart.forEach(item=>{
    total += item.price;
    document.getElementById("cartItems").innerHTML += 
      `<p>${item.name} - ₹${item.price}</p>`;
  });
  document.getElementById("total").innerText = "Total: ₹" + total;
}

function checkout(){
  alert("Payment Gateway Integration (Test Mode Ready)");
}