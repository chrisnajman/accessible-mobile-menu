export default function btnHamburger() {
  const hamburgerButton = document.getElementById("hamburger-button")
  const primaryNavigation = document.getElementById("primary-navigation")
  const siteNavigation = document.getElementById("site-navigation")

  hamburgerButton.addEventListener("click", () => {
    const isExpanded = hamburgerButton.getAttribute("aria-expanded")
    isExpanded === "false"
      ? hamburgerButton.setAttribute("aria-expanded", "true")
      : hamburgerButton.setAttribute("aria-expanded", "false")
    siteNavigation.classList.toggle("menu-hidden")
    siteNavigation.classList.toggle("menu-visible")
    primaryNavigation.classList.toggle("padding")
  })
}
