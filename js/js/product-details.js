/* =========================================
   VIVASAYAMART - PRODUCT DETAILS
   ========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const box =
            document.getElementById("productDetails");


        if (!box) {
            return;
        }


        /* =========================================
           GET PRODUCT ID FROM URL
        ========================================= */

        const params =
            new URLSearchParams(
                window.location.search
            );


        const id =
            Number(
                params.get("id")
            );


        /* =========================================
           FIND PRODUCT
        ========================================= */

        const product =
            products.find(
                function (item) {
                    return item.id === id;
                }
            );


        /* =========================================
           PRODUCT NOT FOUND
        ========================================= */

        if (!product) {

            box.innerHTML = `

                <div class="empty">

                    <h2>
                        Product Not Found
                    </h2>

                    <p>
                        Sorry, the requested product
                        could not be found.
                    </p>

                    <br>

                    <a
                        href="products.html"
                        class="btn primary"
                    >
                        ← Back to Products
                    </a>

                </div>

            `;

            return;
        }


        /* =========================================
           OLD PRICE
        ========================================= */

        const oldPrice =
            product.oldPrice
                ? `
                    <span class="old-price">
                        ${money(product.oldPrice)}
                    </span>
                `
                : "";


        /* =========================================
           DESCRIPTION
        ========================================= */

        const description =
            product.description ||
            "High quality agricultural product suitable for farmers and home gardeners.";


        /* =========================================
           PRODUCT DETAILS HTML
        ========================================= */

        box.innerHTML = `

            <!-- Back Link -->

            <a
                href="products.html"
                class="back-link"
            >
                ← Back to Products
            </a>


            <!-- Product Details Layout -->

            <div
                class="two-col"
                style="margin-top: 25px;"
            >


                <!-- =====================================
                     PRODUCT IMAGE
                ====================================== -->

                <div class="product-img">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        onerror="
                            this.src='images/products/default.jpg';
                        "
                    >

                </div>


                <!-- =====================================
                     PRODUCT INFORMATION
                ====================================== -->

                <div class="product-details-info">


                    <!-- Category -->

                    <p class="eyebrow">

                        ${product.category}

                    </p>


                    <!-- Product Name -->

                    <h1>

                        ${product.name}

                    </h1>


                    <!-- Price -->

                    <div class="product-price-details">

                        <strong>

                            ${money(product.price)}

                        </strong>

                        ${oldPrice}

                    </div>


                    <!-- Description -->

                    <p class="product-description">

                        ${description}

                    </p>


                    <!-- Features -->

                    <ul class="product-features">

                        <li>
                            🌱 Quality checked product
                        </li>

                        <li>
                            🤝 Farmer-friendly pricing
                        </li>

                        <li>
                            📦 Secure packaging
                        </li>

                        <li>
                            🚚 Easy delivery
                        </li>

                    </ul>


                    <!-- Product Actions -->

                    <div class="product-actions">


                        <button
                            type="button"
                            class="btn primary"
                            onclick="addToCart(${product.id})"
                        >
                            🛒 Add to Cart
                        </button>


                        <a
                            href="cart.html"
                            class="btn secondary"
                        >
                            View Cart
                        </a>

                    </div>

                </div>

            </div>

        `;

    }
);