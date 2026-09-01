document.addEventListener("DOMContentLoaded",()=>{
 const summary=document.getElementById("checkoutSummary"),form=document.getElementById("checkoutForm");if(!form)return;
 const cart=getCart();let total=0;cart.forEach(i=>{const p=products.find(x=>x.id===i.id);total+=p.price*i.qty});
 const delivery=total>=1000?0:60;summary.innerHTML=`<h2>Your Order</h2><p>${cart.reduce((s,i)=>s+i.qty,0)} item(s)</p><div class="summary-row"><span>Subtotal</span><b>${money(total)}</b></div><div class="summary-row"><span>Delivery</span><b>${delivery?"₹60":"FREE"}</b></div><div class="summary-row summary-total"><span>Total</span><span>${money(total+delivery)}</span></div>`;
 form.addEventListener("submit",e=>{e.preventDefault();if(!cart.length){alert("Your cart is empty.");location.href="products.html";return}
 const orders=JSON.parse(localStorage.getItem("vivasayaOrders")||"[]");orders.unshift({id:"VM"+Date.now().toString().slice(-7),date:new Date().toLocaleDateString("en-IN"),total:total+delivery,status:"Confirmed",items:cart});localStorage.setItem("vivasayaOrders",JSON.stringify(orders));localStorage.removeItem("vivasayaCart");alert("Order placed successfully!");location.href="orders.html"});
});