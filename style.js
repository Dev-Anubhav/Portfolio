
    // Get references to the menu button and navigation menu
    const menuBtn = document.querySelector(".menu");
    const navMenu = document.querySelector("ul");
    const links = document.querySelectorAll("nav ul li");


    links.forEach((link)=>{
        link.addEventListener("click",()=>{
            if (navMenu.style.left === "0%") {
                navMenu.style.left = "-100%"; // Slide out to the left
            }
        })
    })

    // Add click event listener to the menu button
    menuBtn.addEventListener("click", function() {
        // Toggle the visibility of the navigation menu
        if (navMenu.style.left === "-100%") {
            navMenu.style.left = "0%"; // Slide out to the left
        } else {
            navMenu.style.left = "-100%"; // Slide in from the left
        }
    });

