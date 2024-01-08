export default function btnHamburger() {
  const hamburgerButton = document.getElementById("hamburger-button")
  const btnTxt = document.getElementById("btn-txt")
  const primaryNavigation = document.getElementById("primary-navigation")
  const siteNavigation = document.getElementById("site-navigation")

  hamburgerButton.addEventListener("click", (e) => {
    const isExpanded = hamburgerButton.getAttribute("aria-expanded")
    if (isExpanded === "false") {
      hamburgerButton.setAttribute("aria-expanded", "true")
      btnTxt.textContent = "Close menu"
    } else {
      hamburgerButton.setAttribute("aria-expanded", "false")
      btnTxt.textContent = "Expand menu"
    }
    siteNavigation.classList.toggle("menu-hidden")
    siteNavigation.classList.toggle("menu-visible")
    primaryNavigation.classList.toggle("padding")
  })
}
