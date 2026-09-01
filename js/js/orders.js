/* =========================================
   VIVASAYAMART - ORDERS.JS
   ========================================= */


/* =========================================
   LOAD ORDERS
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const box =
        document.getElementById("ordersList");


    let orders =
        JSON.parse(
            localStorage.getItem("vivasayaOrders") || "[]"
        );


    if (!box) {
        return;
    }


    /* =========================================
       NO ORDERS
    ========================================= */

    if (!orders.length) {

        box.innerHTML = `

            <div class="empty">

                <h2>
                    No orders yet
                </h2>

                <p>
                    Your confirmed orders will appear here.
                </p>

                <br>

                <a
                    class="btn primary"
                    href="products.html"
                >
                    Start Shopping
                </a>

            </div>

        `;

        updateOrdersCartCount();

        return;
    }


    /* =========================================
       DISPLAY ORDERS
    ========================================= */

    box.innerHTML = orders.map(o => `

        <div class="order-card">


            <!-- Order Header -->

            <div
                style="
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    gap:15px;
                    flex-wrap:wrap;
                "
            >

                <div>

                    <h2>
                        Order #${o.id}
                    </h2>

                    <p>
                        Placed on ${o.date}
                    </p>

                </div>


                <span class="order-status">
                    ${o.status}
                </span>

            </div>


            <!-- Order Summary -->

            <p style="margin-top:12px;">

                <b>
                    ${o.items.reduce(
                        (s, i) => s + Number(i.qty || 0),
                        0
                    )} item(s)
                </b>

                • Total

                <b>
                    ${money(o.total)}
                </b>

            </p>


            <!-- Delete Order -->

            <button
                type="button"
                class="delete-order-btn"
                onclick="deleteOrder('${o.id}')"
            >

                🗑️ Delete Order

            </button>


        </div>

    `).join("");


    updateOrdersCartCount();

});


/* =========================================
   DELETE ORDER
========================================= */

function deleteOrder(orderId) {

    const confirmation =
        confirm(
            "Are you sure you want to delete this order?"
        );


    if (!confirmation) {

        return;

    }


    let orders =
        JSON.parse(
            localStorage.getItem("vivasayaOrders") || "[]"
        );


    /* Remove selected order only */

    orders =
        orders.filter(
            function(order) {

                return String(order.id) !==
                       String(orderId);

            }
        );


    /* Save updated orders */

    localStorage.setItem(
        "vivasayaOrders",
        JSON.stringify(orders)
    );


    /* Reload orders */

    location.reload();

}


/* =========================================
   UPDATE CART COUNT
========================================= */

function updateOrdersCartCount() {

    const cartCount =
        document.getElementById("cartCount");


    if (!cartCount) {

        return;

    }


    const cart =
        JSON.parse(
            localStorage.getItem("cart") || "[]"
        );


    let count = 0;


    cart.forEach(
        function(item) {

            count +=
                Number(item.quantity || item.qty || 0);

        }
    );


    cartCount.textContent = count;

}