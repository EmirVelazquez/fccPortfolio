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
    let illo = new Zdog.Illustration({
        // set canvas with selector
        element: ".zdog-canvas",
        resize: "fullscreen",
        // zoom number for element
        zoom: 1,
        onResize: function (width, height) {
            // scale zoom
            let minSize = Math.min(width, height);
            this.zoom = minSize / 250;
        }
    });

    let mainBody = new Zdog.Cylinder({
        addTo: illo,
        diameter: 30,
        length: 120,
        stroke: false,
        color: '#C25',
        backface: '#E62',
        rotate: { x: Zdog.TAU / 5 }
    });

    let rocketTop = new Zdog.Cone({
        addTo: illo,
        diameter: 30,
        length: 30,
        stroke: false,
        color: '#636',
        backface: '#C25',
        rotate: { x: Zdog.TAU / 5 },
        translate: { y: -74, x: -2 }
    });

    let box = new Zdog.Box({
        addTo: illo,
        width: 50,
        height: 50,
        depth: 50,
        stroke: false,
        color: '#f26419', // default face color
        leftFace: '#77b6ea',
        rightFace: '#77b6ea',
        topFace: '#ED0',
        bottomFace: '#636',
        translate: { y: -40, x: 70 }
    });

    // update & render
    illo.updateRenderGraph();

    // Animating
    function animate() {
        // rotate illo each frame
        illo.rotate.y += 0.01;
        illo.updateRenderGraph();
        // animate next frame
        requestAnimationFrame(animate);
    }
    // start animation
    animate();
})