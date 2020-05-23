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

    // ==================================================
    // Zdog Demo
    // ==================================================

    // create illustration
    let welcomeCanvas = new Zdog.Illustration({
        // set canvas with selector
        element: ".welcomeCanvas",
        resize: "fullscreen",
        // zoom number for element
        zoom: 1,
        onResize: function (width, height) {
            // scale zoom
            let minSize = Math.min(width, height);
            this.zoom = minSize / 250;
        }
    });

    let topHemi = new Zdog.Hemisphere({
        addTo: welcomeCanvas,
        diameter: 20,
        stroke: false,
        color: '#C25',
        backface: '#E62',
        translate: { x: 1 },
        // rotate: { x: Zdog.TAU / 4 }
    });

    let bottomHemi = topHemi.copy({
        translate: { x: 1 },
        rotate: { y: Zdog.TAU / 2 }
    })

    // update & render
    welcomeCanvas.updateRenderGraph();

    // Animating
    function animate() {
        // rotate welcomeCanvas each frame
        welcomeCanvas.rotate.y += 0.01;
        // topHemi.rotate.x += 0.02;
        // bottomHemi.rotate.x += 0.02;
        welcomeCanvas.updateRenderGraph();
        // animate next frame
        requestAnimationFrame(animate);
    }
    // start animation
    animate();
})