/* =========================================
   VIVASAYAMART - CART.JS
   ========================================= */


/* =========================================
   RENDER CART
========================================= */

function renderCart() {

    const items =
        document.getElementById("cartItems");

    const summary =
        document.getElementById("cartSummary");


    if (!items || !summary) {
        return;
    }


    const cart =
        getCart();


    /* =========================================
       EMPTY CART
    ========================================= */

    if (!cart.length) {

        items.innerHTML = `

            <div class="empty">

                <h2>
                    Your cart is empty
                </h2>

                <p>
                    Add some farm products to continue.
                </p>

                <br>

                <a
                    class="btn primary"
                    href="products.html"
                >
                    Shop Products
                </a>

            </div>

        `;


        summary.innerHTML = "";

        return;
    }


    /* =========================================
       CALCULATE TOTAL
    ========================================= */

    let total = 0;


    items.innerHTML =
        cart.map(item => {

            const product =
                products.find(
                    product =>
                        product.id === item.id
                );


            if (!product) {
                return "";
            }


            const subtotal =
                product.price *
                item.qty;


            total += subtotal;


            return `

                <div class="cart-item">


                    <!-- Product Image / Icon -->

                    <div class="cart-item-img">
                        ${product.icon}
                    </div>


                    <!-- Product Details -->

                    <div>

                        <h3>
                            ${product.name}
                        </h3>

                        <p class="price">
                            ${money(product.price)}
                        </p>


                        <!-- Quantity Controls -->

                        <div class="qty-controls">

                            <button
                                type="button"
                                onclick="changeQty(
                                    ${product.id},
                                    -1
                                )"
                            >
                                −
                            </button>


                            <b>
                                ${item.qty}
                            </b>


                            <button
                                type="button"
                                onclick="changeQty(
                                    ${product.id},
                                    1
                                )"
                            >
                                +
                            </button>


                            <button
                                type="button"
                                onclick="removeItem(
                                    ${product.id}
                                )"
                            >
                                Remove
                            </button>

                        </div>

                    </div>


                    <!-- Subtotal -->

                    <strong>
                        ${money(subtotal)}
                    </strong>

                </div>

            `;

        }).join("");


    /* =========================================
       DELIVERY
    ========================================= */

    const delivery =
        total >= 1000
            ? 0
            : 60;


    const grandTotal =
        total + delivery;


    /* =========================================
       ORDER SUMMARY
    ========================================= */

    summary.innerHTML = `

        <h2>
            Order Summary
        </h2>


        <div class="summary-row">

            <span>
                Subtotal
            </span>

            <b>
                ${money(total)}
            </b>

        </div>


        <div class="summary-row">

            <span>
                Delivery
            </span>

            <b>
                ${
                    delivery
                        ? money(delivery)
                        : "FREE"
                }
            </b>

        </div>


        <div class="summary-row summary-total">

            <span>
                Total
            </span>

            <span>
                ${money(grandTotal)}
            </span>

        </div>


        <br>


        <a
            class="btn primary full"
            href="checkout.html"
        >
            Proceed to Checkout
        </a>

    `;

}


/* =========================================
   CHANGE QUANTITY
========================================= */

function changeQty(id, quantityChange) {

    const cart =
        getCart();


    const item =
        cart.find(
            product =>
                product.id === id
        );


    if (item) {

        item.qty += quantityChange;


        if (item.qty <= 0) {

            cart.splice(
                cart.indexOf(item),
                1
            );

        }

    }


    saveCart(cart);

    renderCart();

}


/* =========================================
   REMOVE ITEM
========================================= */

function removeItem(id) {

    const updatedCart =
        getCart().filter(
            item =>
                item.id !== id
        );


    saveCart(
        updatedCart
    );


    renderCart();

}


/* =========================================
   PAGE LOAD
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    renderCart
);