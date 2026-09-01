/* =========================================
   VIVASAYAMART - MAIN.JS
   ========================================= */


/* =========================================
   GET CART
   ========================================= */

function getCart() {

    return JSON.parse(
        localStorage.getItem("vivasayaCart") || "[]"
    );

}


/* =========================================
   SAVE CART
   ========================================= */

function saveCart(cart) {

    localStorage.setItem(
        "vivasayaCart",
        JSON.stringify(cart)
    );

    updateCartCount();

}


/* =========================================
   UPDATE CART COUNT
   ========================================= */

function updateCartCount() {

    const count =
        getCart().reduce(
            (sum, item) => sum + item.qty,
            0
        );


    document
        .querySelectorAll("#cartCount")
        .forEach(
            element => {

                element.textContent =
                    count;

            }
        );

}


/* =========================================
   ADD TO CART
   ========================================= */

function addToCart(id) {

    const cart =
        getCart();


    const item =
        cart.find(
            product =>
                product.id === id
        );


    if (item) {

        item.qty++;

    } else {

        cart.push({

            id: id,

            qty: 1

        });

    }


    saveCart(cart);


    alert(
        "Product added to cart!"
    );

}


/* =========================================
   FORMAT MONEY
   ========================================= */

function money(n) {

    return (
        "₹" +
        n.toLocaleString("en-IN")
    );

}


/* =========================================
   PAGE LOAD
   ========================================= */

document.addEventListener(
    "DOMContentLoaded",
    updateCartCount
);