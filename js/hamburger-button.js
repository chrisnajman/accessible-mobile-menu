import { hamburgerButton, btnTxt, siteNavigation } from "./globals.js"

export default function btnHamburger() {
  hamburgerButton.addEventListener("click", () => {
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
  })
}
