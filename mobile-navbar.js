class MobileNavbar{
    contructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(this)
        this.navList.classList.toggle(this.activeClass);
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
           this.addClickEvent();
        }
        return this;
    }
}


const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".navbar",
    ".navbar ul",
);