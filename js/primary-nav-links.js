import { hamburgerButton, btnTxt, siteNavigation } from "./globals.js"

export default function primaryNavLinks() {
  const navLinks = document.querySelectorAll(".nav-link")

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburgerButton.setAttribute("aria-expanded", "false")
      btnTxt.textContent = "Expand menu"
      siteNavigation.classList.add("menu-hidden")
      siteNavigation.classList.remove("menu-visible")
    })
  })
}
