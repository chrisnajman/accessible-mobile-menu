# Accessible Mobile Menu

A responsive mobile menu that prioritizes accessibility features for screen readers and keyboard users.

---

## Description

The mobile menu is designed to be responsive, and is visible on screens less than 768px wide. It is initially hidden and appears upon clicking the hamburger menu button. Clicking on a menu item will close the menu.

---

## Accessibility Features

### Screen Reader Accessibility

The menu is accessible to screen readers through the use of appropriate ARIA attributes.

#### ARIA Attributes Used

- `aria-controls="site-navigation"`: Associates the hamburger button with the site navigation menu.
- `aria-expanded="false" / aria-expanded="true"`: Dynamically updates the state of the navigation menu, indicating whether it's expanded or collapsed.

### Keyboard Accessibility

The menu ensures accessibility for keyboard users by allowing them to navigate to the hamburger button using the keyboard's tab functionality. Once focused on the button, users can press the 'enter' key to toggle the visibility of the menu. This behavior ensures that keyboard users can interact with the menu effectively, enabling them to open and close it without relying on mouse interactions.

### WAVE Web Accessibility Evaluation Tools Report

- [Automated accessibility analysis results](https://wave.webaim.org/report#/https://chrisnajman.github.io/accessible-mobile-menu/)

---

## Usage

### HTML Structure

The HTML structure comprises a div element with an ID of `primary-navigation`, containing the hamburger button and the navigation menu.

### CSS

The CSS defines the styles for the mobile menu and the hamburger button, including responsive design for different screen sizes.

### JavaScript Functionality

The JavaScript function `btnHamburger()` handles the click event on the hamburger button, toggling the visibility of the navigation menu and updating ARIA attributes accordingly.

---

## Source

- The animation on the button is based on the basic version of [Basic, Intermediate & Pro animated hamburger icons](https://youtu.be/R00QiudbD4Y?si=VDTxfeCotRcLGnGx).

---

## Testing

Tested on Windows 10 with:

- Chrome
- Firefox
- Microsoft Edge

The page has been tested in both browser and device views.
