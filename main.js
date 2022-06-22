let product = document.querySelector(".product")
let innerLinkContainer = document.querySelector(".inner-link-container")


product.addEventListener('click', function() {
 innerLinkContainer.classList.toggle('inner-link-container.active')
 console.log("I am a winner")
 // if (innerLinks.classList.contains(''))
 // innerLinkContainer.style.display = "block"
})