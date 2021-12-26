const toggles = document.querySelectorAll(".faq-toggle")

toggles.forEach((toggle, i) => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active')
  })
});
