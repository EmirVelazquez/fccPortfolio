document.addEventListener("DOMContentLoaded", function () {
    // ==================================================
    // References to elements or Global variables
    // ==================================================

    const navBar = document.getElementById("navbar");
    console.log("Hola Amigos!");

    // ==================================================
    // Main Executions
    // ==================================================

    colorNav();

    // ==================================================
    // Helper Functions
    // ==================================================

    // This function will add a class name to the navbar for display purposes
    function colorNav() {
        document.addEventListener("scroll", function () {
            let distanceScrolled = window.pageYOffset;
            if (distanceScrolled < 1) {
                navBar.classList.remove("updateNav");
            } else {
                navBar.classList.add("updateNav");
            }
        });
    };
})