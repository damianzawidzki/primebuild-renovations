document.addEventListener("DOMContentLoaded", function () {
    addWebsiteFooter();
    initialiseMobileMenu();
    updateCopyrightYear();
});

function addWebsiteFooter() {
    const existingFooter = document.querySelector(".site-footer");

    if (existingFooter) {
        return;
    }

    const footerHTML = `
        <footer class="site-footer">
            <div class="container footer-grid">
                <div class="footer-company">
                    <a href="index.html#home" class="footer-logo">
                        <img
                            src="assets/images/logo.svg"
                            alt="PrimeBuild Renovations"
                        >
                    </a>

                    <p>
                        Professional home renovation services across
                        Leicester and the surrounding areas.
                    </p>
                </div>

                <div class="footer-column">
                    <h2>Quick Links</h2>

                    <nav class="footer-links">
                        <a href="index.html#home">Home</a>
                        <a href="index.html#services">Services</a>
                        <a href="index.html#projects">Our Work</a>
                        <a href="about.html">About Us</a>
                        <a href="contact.html">Contact</a>
                    </nav>
                </div>

                <div class="footer-column">
                    <h2>Our Services</h2>

                    <div class="footer-links">
                        <a href="index.html#services">
                            Kitchen Renovations
                        </a>

                        <a href="index.html#services">
                            Bathroom Renovations
                        </a>

                        <a href="index.html#services">
                            Property Renovations
                        </a>

                        <a href="index.html#services">
                            Roofing and Exterior Work
                        </a>
                    </div>
                </div>

                <div class="footer-column">
                    <h2>Contact</h2>

                    <div class="footer-contact">
                        <a href="tel:+441160000000">
                            0116 000 0000
                        </a>

                        <a href="mailto:pepik1306@o2.pl">
                            pepik1306@o2.pl
                        </a>

                        <p>
                            Leicester and surrounding areas
                        </p>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <div class="container footer-bottom-content">
                    <p>
                        &copy;
                        <span id="current-year"></span>
                        PrimeBuild Renovations. All rights reserved.
                    </p>

                    <p>
                        Website designed and developed by Damian Zawidzki
                    </p>
                </div>
            </div>
        </footer>
    `;

    document.body.insertAdjacentHTML("beforeend", footerHTML);
}

function initialiseMobileMenu() {
    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".main-nav");

    if (!menuButton || !navigation) {
        return;
    }

    function closeMenu() {
        navigation.classList.remove("is-open");
        menuButton.classList.remove("is-active");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation menu");
    }

    function openMenu() {
        navigation.classList.add("is-open");
        menuButton.classList.add("is-active");
        menuButton.setAttribute("aria-expanded", "true");
        menuButton.setAttribute("aria-label", "Close navigation menu");
    }

    menuButton.addEventListener("click", function () {
        const menuIsOpen = navigation.classList.contains("is-open");

        if (menuIsOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    navigation.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", function (event) {
        const clickIsInsideMenu = navigation.contains(event.target);
        const clickIsOnButton = menuButton.contains(event.target);

        if (!clickIsInsideMenu && !clickIsOnButton) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeMenu();
        }
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
}

function updateCopyrightYear() {
    const yearElement = document.querySelector("#current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}