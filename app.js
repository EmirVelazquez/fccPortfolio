document.addEventListener("DOMContentLoaded", function () {
    // ==================================================
    // References to elements, Global variables, or Flags
    // ==================================================

    const navBar = document.getElementById("navbar");
    const projectImg = document.getElementsByClassName("projectImg");
    const projectSection = document.getElementById("projects");
    var imgOneHidden = false;
    var imgTwoHidden = false;
    var imgThreeHidden = false;
    var imgFourHidden = false;

    // ==================================================
    // Main Executions
    // ==================================================

    colorNav();
    giveTileId();
    handleTileHover();
    revertTileNormal();

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

    function giveTileId() {
        for (var i = 0; i < projectImg.length; i++) {
            projectImg[i].setAttribute("id", "project" + i)
        };
    };

    function handleTileHover() {
        projectSection.addEventListener("mouseover", function (event) {
            let hoveringOver = String(event.target.id);
            console.log(hoveringOver);
            if (hoveringOver === "project0") {
                let projectOneImg = document.getElementById("project0");
                let projectOneLink = document.getElementById("projectOneLink");
                projectOneImg.style.display = "none";
                projectOneLink.style.zIndex = "2";
                imgOneHidden = true;
            } else if (hoveringOver === "project1") {
                let projectTwoImg = document.getElementById("project1");
                let projectTwoLink = document.getElementById("projectTwoLink");
                projectTwoImg.style.display = "none";
                projectTwoLink.style.zIndex = "2";
                imgTwoHidden = true;
            } else if (hoveringOver === "project2") {
                let projectThreeImg = document.getElementById("project2");
                let projectThreeLink = document.getElementById("projectThreeLink");
                projectThreeImg.style.display = "none";
                projectThreeLink.style.zIndex = "2";
                imgThreeHidden = true;
            } else if (hoveringOver === "project3") {
                let projectFourImg = document.getElementById("project3");
                let projectFourLink = document.getElementById("projectFourLink");
                projectFourImg.style.display = "none";
                projectFourLink.style.zIndex = "2";
                imgFourHidden = true;
            }
        });
    };

    function revertTileNormal() {
        projectSection.addEventListener("mouseout", function (event) {
            let hoveringOver = String(event.target.id);
            if (hoveringOver !== "project0" && imgOneHidden) {
                let projectOneImg = document.getElementById("project0");
                let projectOneLink = document.getElementById("projectOneLink");
                projectOneImg.style.display = "block";
                projectOneLink.style.zIndex = "0";
                imgOneHidden = false;
            } else if (hoveringOver !== "project1" && imgTwoHidden) {
                let projectTwoImg = document.getElementById("project1");
                let projectTwoLink = document.getElementById("projectTwoLink");
                projectTwoImg.style.display = "block";
                projectTwoLink.style.zIndex = "0";
                imgTwoHidden = false;
            } else if (hoveringOver !== "project2" && imgThreeHidden) {
                let projectThreeImg = document.getElementById("project2");
                let projectThreeLink = document.getElementById("projectThreeLink");
                projectThreeImg.style.display = "block";
                projectThreeLink.style.zIndex = "0";
                imgThreeHidden = false;
            } else if (hoveringOver !== "project3" && imgFourHidden) {
                let projectFourImg = document.getElementById("project3");
                let projectFourLink = document.getElementById("projectFourLink");
                projectFourImg.style.display = "block";
                projectFourLink.style.zIndex = "0";
                imgFourHidden = false;
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
        onResize: function (width, height) {
            // scale zoom
            let minSize = Math.min(width, height);
            this.zoom = minSize / 310;
        }
    });

    // Center of Model Here //
    let topHemi = new Zdog.Hemisphere({
        addTo: welcomeCanvas,
        diameter: 30,
        stroke: false,
        color: "#4169e1",
        backface: "#6280da",
        translate: { z: 1.75 }
    });

    let bottomHemi = topHemi.copy({
        addTo: topHemi,
        color: "#ee3b3b",
        backface: "#f06f6f",
        translate: { z: -1.75 },
        rotate: { y: Zdog.TAU / 2 }
    })
    // Center of Model Here //

    // Electron Path's and Electrons //
    let pathOne = new Zdog.Ellipse({
        addTo: welcomeCanvas,
        diameter: 200,
        stroke: 5,
        color: "#FFFFFF",
        rotate: { x: Zdog.TAU / -3.5 }
    })

    let sphereOne = new Zdog.Shape({
        addTo: pathOne,
        stroke: 15,
        color: "#EEEEEE",
        translate: { x: 100 }
    });

    let pathTwo = pathOne.copy({
        rotate: { y: Zdog.TAU / 3.5 }
    })

    let sphereTwo = sphereOne.copy({
        addTo: pathTwo
    })

    let pathThree = pathOne.copy({
        rotate: { x: Zdog.TAU / -3.3, y: Zdog.TAU / 1.6 }
    })

    let sphereThree = sphereOne.copy({
        addTo: pathThree
    })

    let pathFour = pathOne.copy({
        rotate: { x: Zdog.TAU / -3.3, y: Zdog.TAU / -1.6 }
    })

    let sphereFour = sphereOne.copy({
        addTo: pathFour
    })

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
        pathTwo.rotate.z += 0.01;
        pathThree.rotate.z += 0.01;
        pathFour.rotate.z += 0.01;
        welcomeCanvas.updateRenderGraph();
        // animate next frame
        requestAnimationFrame(animate);
    }

    // Start animation for 3d Model
    animate();

    // ==================================================
    // Zdog 3D Object
    // ==================================================

})