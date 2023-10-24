//navlinks menu mobile
const toggleButton = document.getElementsByClassName('btn-toggle')[0]
const navbarLinks = document.getElementsByClassName('menu-links', 'menusocial')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
