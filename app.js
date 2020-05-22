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

    // Rotating flag variable
    let isSpinning = true;

    // create illo
    let illo = new Zdog.Illustration({
        // set canvas with selector
        element: ".zdog-canvas",
        // zoom up 4x
        zoom: 1.5,
        // enable rotating scene with dragging
        dragRotate: true,
        // stop rotation when dragging starts
        onDragStart: function () {
            isSpinning = false;
        }
    });

    // add circle
    new Zdog.Ellipse({
        addTo: illo,
        diameter: 80,
        stroke: 20,
        color: "#636"
    });

    // square
    new Zdog.Rect({
        addTo: illo,
        width: 80,
        height: 80,
        // position further back
        translate: { z: -40 },
        stroke: 12,
        color: '#E62',
        fill: true,
    });

    // update & render
    illo.updateRenderGraph();

    // Animating
    function animate() {
        // rotate illo each frame
        if (isSpinning) {
            illo.rotate.y += 0.03;
        }
        illo.updateRenderGraph();
        // animate next frame
        requestAnimationFrame(animate);
    }
    // start animation
    animate();
})