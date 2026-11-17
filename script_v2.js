// Tab functionality for both drinks and hookah sections
document.addEventListener("DOMContentLoaded", () => {
  // Hamburger menu toggle
  const hamburger = document.getElementById("hamburger")
  const nav = document.getElementById("nav")

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    nav.classList.toggle("active")
  })

  // Close menu when clicking on a link
  const navLinks = nav.querySelectorAll("a")
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active")
      nav.classList.remove("active")
    })
  })

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
      hamburger.classList.remove("active")
      nav.classList.remove("active")
    }
  })

  // Get all tab buttons
  const tabButtons = document.querySelectorAll(".tab-btn")

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetTab = this.getAttribute("data-tab")
      const section = this.closest(".section")

      // Remove active class from all buttons in this section
      section.querySelectorAll(".tab-btn").forEach((btn) => {
        btn.classList.remove("active")
      })

      // Add active class to clicked button
      this.classList.add("active")

      // Hide all tab contents in this section
      section.querySelectorAll(".tab-content").forEach((content) => {
        content.classList.remove("active")
      })

      // Show target tab content
      const targetContent = section.querySelector(`#${targetTab}`)
      if (targetContent) {
        targetContent.classList.add("active")
      }
    })
  })

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        const headerOffset = 68
        const elementPosition = target.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    })
  })
})
