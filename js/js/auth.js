/* =========================================
   VIVASAYAMART - AUTH & CONTACT
   ========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {


        /* =========================================
           REGISTER
        ========================================= */

        const registerForm =
            document.getElementById(
                "registerForm"
            );


        if (registerForm) {

            registerForm.addEventListener(
                "submit",
                event => {

                    event.preventDefault();


                    const password =
                        document.getElementById(
                            "regPassword"
                        ).value;


                    const confirmPassword =
                        document.getElementById(
                            "regConfirm"
                        ).value;


                    /* Password Match */

                    if (
                        password !==
                        confirmPassword
                    ) {

                        document.getElementById(
                            "registerMessage"
                        ).textContent =
                            "Passwords do not match.";

                        return;

                    }


                    /* Save User */

                    const user = {

                        name:
                            document.getElementById(
                                "regName"
                            ).value,

                        email:
                            document.getElementById(
                                "regEmail"
                            ).value,

                        password:
                            password

                    };


                    localStorage.setItem(
                        "vivasayaUser",
                        JSON.stringify(user)
                    );


                    /* Success Message */

                    document.getElementById(
                        "registerMessage"
                    ).textContent =
                        "Registration successful!";


                    /* Redirect to Login */

                    setTimeout(
                        () => {

                            location.href =
                                "login.html";

                        },
                        700
                    );

                }
            );

        }


        /* =========================================
           LOGIN
        ========================================= */

        const loginForm =
            document.getElementById(
                "loginForm"
            );


        if (loginForm) {

            loginForm.addEventListener(
                "submit",
                event => {

                    event.preventDefault();


                    const user =
                        JSON.parse(
                            localStorage.getItem(
                                "vivasayaUser"
                            ) || "null"
                        );


                    const email =
                        document.getElementById(
                            "loginEmail"
                        ).value;


                    const password =
                        document.getElementById(
                            "loginPassword"
                        ).value;


                    /* Validate Login */

                    if (
                        user &&
                        user.email === email &&
                        user.password === password
                    ) {

                        localStorage.setItem(
                            "vivasayaLoggedIn",
                            "true"
                        );


                        document.getElementById(
                            "loginMessage"
                        ).textContent =
                            "Login successful!";


                        /* Redirect to Home */

                        setTimeout(
                            () => {

                                location.href =
                                    "index.html";

                            },
                            700
                        );

                    } else {

                        document.getElementById(
                            "loginMessage"
                        ).textContent =
                            "Invalid email or password. Register first if needed.";

                    }

                }
            );

        }


        /* =========================================
           CONTACT FORM
        ========================================= */

        const contactForm =
            document.getElementById(
                "contactForm"
            );


        if (contactForm) {

            contactForm.addEventListener(
                "submit",
                event => {

                    event.preventDefault();


                    document.getElementById(
                        "contactMessage"
                    ).textContent =
                        "Thanks! Your message has been submitted.";

                }
            );

        }


    }
);