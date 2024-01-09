import themeSwitcher from "./theme-switcher.js"
import primaryNavigationResizeObserver from "./observers/primary-navigation-resize-observer.js"
import articleHeaderIntersectionObserver from "./observers/article-header-intersection-observer.js"
import articleSectionHeadingsIntersectionObserver from "./observers/article-section-headings-intersection-observer.js"
import btnHamburger from "./hamburger-button.js"
import primaryNavLinks from "./primary-nav-links.js"

themeSwitcher()
primaryNavigationResizeObserver()
articleHeaderIntersectionObserver()
articleSectionHeadingsIntersectionObserver()
btnHamburger()
primaryNavLinks()
