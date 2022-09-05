import setScrollAnimation from './scroll.js'
addEventListener('load', () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  let TOGGLE_MENU = false


  const nav = document.querySelector('#navBg')
  const closeNavBtn = document.querySelector('#closeNavBtn')
  const menuBtn = document.querySelector('#menuBtn')
  const headerNav = document.querySelector('#headerNav')

  menuBtn.addEventListener('click', () => {
    if (!TOGGLE_MENU) {
      nav.classList.remove('hidden')
      menuBtn.classList.add('hidden')
      headerNav.style.display = 'none'
      closeNavBtn.classList.remove('hidden')
      document.body.style.top = `-${window.scrollY}px`
      document.body.style.right = `0px`
      document.body.style.left = `0px`
      document.body.style.position = 'fixed'
      TOGGLE_MENU = true
    }
  })

  closeNavBtn.addEventListener('click', () => {
    if (TOGGLE_MENU) {
      nav.classList.add('hidden')
      menuBtn.classList.remove('hidden')
      headerNav.style.display = ''
      closeNavBtn.classList.add('hidden')
      const scrollY = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.right = ``
      document.body.style.left = ``
      window.scrollTo(0, parseInt(scrollY || '0') * -1)
      TOGGLE_MENU = false
    }
  })

  addEventListener('keydown', (e) => {
    if (!nav.classList.contains('hidden') && (e.key === "Escape" || e.key === "Esc")) {
      nav.classList.add('hidden')
      menuBtn.classList.remove('hidden')
      headerNav.style.display = ''
      closeNavBtn.classList.add('hidden')
      const scrollY = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      window.scrollTo(0, parseInt(scrollY || '0') * -1)
      TOGGLE_MENU = !TOGGLE_MENU
    }
  })


  if(document.querySelector('#gallery')){
    var swiper = new Swiper(".mySwiper", {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 6,
      // freeMode: true,
      // watchSlidesProgress: true,
      centeredSlides: true,
      // touchRatio: 0.4,
    })
    var swiper2 = new Swiper(".mySwiper2", {
      loop: true,
      spaceBetween: 10,
      keyboard: {
        enabled: true,
        onlyInViewport: false
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      thumbs: {
        swiper: swiper
      }
    })
  }


  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  }
})