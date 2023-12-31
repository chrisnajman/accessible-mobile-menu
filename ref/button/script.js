const button = document.querySelector("button")

button.addEventListener("click", () => {
  const isExpanded = button.getAttribute("aria-expanded")
  if (isExpanded === "false") {
    button.setAttribute("aria-expanded", "true")
  } else {
    button.setAttribute("aria-expanded", "false")
  }
})
