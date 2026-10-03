const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");
const navigationLinks = document.querySelectorAll(".navigation ul li a");

if (menuToggle && navigation) {
    menuToggle.addEventListener("click", function () {
        menuToggle.classList.toggle("active");
        navigation.classList.toggle("open");
    });

    navigationLinks.forEach(link => {
        link.addEventListener("click", function () {
            menuToggle.classList.remove("active");
            navigation.classList.remove("open");
        });
    });
}