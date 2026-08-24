document.addEventListener("DOMContentLoaded", () => {

   
    const yearElements = document.querySelectorAll(".current-year");

    const currentYear = new Date().getFullYear();

    yearElements.forEach((element) => {
        element.textContent = currentYear;
    });


  
    document.body.classList.add("page-loaded");


    
    const currentPage = window.location.pathname
        .split("/")
        .pop();

    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((link) => {

        const linkPage = link
            .getAttribute("href")
            .split("/")
            .pop();

        if (
            linkPage === currentPage ||
            (currentPage === "" && linkPage === "index.html")
        ) {

            navLinks.forEach((item) => {
                item.classList.remove("active");
            });

            link.classList.add("active");
        }

    });

});