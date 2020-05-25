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
    // Zdog 3D Object
    // ==================================================

    // Canvas for Zdog Object Illustration
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

    // Center of Model Here //
    let topHemi = new Zdog.Hemisphere({
        addTo: welcomeCanvas,
        diameter: 30,
        stroke: false,
        color: '#C25',
        backface: '#E62',
        translate: { z: 1.25 }
    });

    let bottomHemi = topHemi.copy({
        addTo: topHemi,
        translate: { z: -1.25 },
        rotate: { y: Zdog.TAU / 2 }
    })
    // Center of Model Here //

    // Electron Path's and Electrons //
    let pathOne = new Zdog.Ellipse({
        addTo: welcomeCanvas,
        diameter: 200,
        stroke: 5,
        color: "rgba(255, 255, 255, 0.5)",
        translate: { z: 10 },
        rotate: { x: Zdog.TAU / 4 }
    })

    let sphereOne = new Zdog.Shape({
        addTo: pathOne,
        stroke: 15,
        color: "#636",
        translate: { x: 100 }
    });
    // Electron Path's and Electrons //

    // Update & Render Canvas
    welcomeCanvas.updateRenderGraph();

    // Function that Handles animations
    function animate() {
        // rotate center hemispheres each frame
        topHemi.rotate.y += 0.01;
        topHemi.rotate.x += 0.02;
        // rotate the path around center hemispheres
        pathOne.rotate.z += 0.01;
        welcomeCanvas.updateRenderGraph();
        // animate next frame
        requestAnimationFrame(animate);
    }
    // start animation
    animate();
})