import setScrollAnimation from './scroll.js'
addEventListener('load', () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  let TOGGLE_MENU = false


  const nav = document.querySelector('#navBg')
  const closeNavBtn = document.querySelector('#closeNavBtn')
  const menuBtn = document.querySelector('#menuBtn')
  const headerNav = document.querySelector('#headerNav')
  const yugenCircles = document.querySelector('#yugenWaterMark')
  const navList = document.querySelector('#navList')

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
      if (innerWidth < 500) {
        document.querySelector('#bookNow').classList.add('hidden')
        document.querySelector('#mobileLogo').classList.remove('hidden')
      }
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
      if (innerWidth < 500) {
        document.querySelector('#bookNow').classList.remove('hidden')
        document.querySelector('#mobileLogo').classList.add('hidden')
      }
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
      if (innerWidth < 500) {
        document.querySelector('#bookNow').classList.remove('hidden')
        document.querySelector('#mobileLogo').classList.add('hidden')
      }
      window.scrollTo(0, parseInt(scrollY || '0') * -1)
      TOGGLE_MENU = !TOGGLE_MENU
    }
  })


  if (document.querySelector('#gallery')) {
    var swiper = new Swiper(".mySwiper", {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 2,
      freeMode: true,
      watchSlidesProgress: true,
      centeredSlides: true,
      touchRatio: 0.4,
      breakpoints: {
        576: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20
        },
        1440: {
          slidesPerView: 5,
          spaceBetween: 10
        }
      }
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

  let positions = []

  addEventListener("mousemove", e => {
    if (TOGGLE_MENU && innerWidth > 768) {
      const x = -(e.pageX + yugenCircles.offsetLeft) / 50;
      const y = -(e.pageY + yugenCircles.offsetTop) / 50;
      positions.push({
        x,
        y
      });
      const averageCount = 10;
      if (positions.length > averageCount)
        positions.splice(0, 1);

      const current = positions.reduce((acc, e) => {
        acc.x += e.x;
        acc.y += e.y;
        return acc
      }, {
        x: 0,
        y: 0
      });
      current.x /= positions.length;
      current.y /= positions.length;

      yugenCircles.style.transform = `translateX(${current.x}px) translateY(${current.y}px)`;
    }
  })

  if (window.innerWidth < 1024) {
    navList.style.height = (window.innerHeight - 110) + 'px'
    navList.style.overflow = 'scroll'
  }


  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  }






  // Loading page

  const landingTeaBar = document.getElementById('teaBar')
  const landingDining = document.getElementById('dining')
  // const loadingScreen = document.getElementById('loading-screen')
  if (landingTeaBar && landingDining) {
    let mobCurrPos = 0
    let mobPrevPos = mobCurrPos
    const sensitivityError = 5

    // desktop teabar event
    landingTeaBar.addEventListener('wheel', (e) => {
      if (e.wheelDelta < 0) {
        window.location.assign("/?a=hidden")
      }
    })

    // desktop restaurant event
    landingDining.addEventListener('wheel', (e) => {
      if (e.wheelDelta >= 0) {
        window.location.assign("https://restaurant-lime-xi.vercel.app/?a=hidden")
      }
    })

    // mobile restaurant event
    // loadingScreen.addEventListener('touchmove', (e) => {
    //   mobCurrPos = e.changedTouches[0].pageY

    //   if (Math.abs(mobCurrPos - mobPrevPos) > sensitivityError) {
    //     if (mobCurrPos < mobPrevPos) {
    //       window.location.assign("https://teabar.vercel.app/?a=hidden")
    //     }
    //     else {
    //       window.location.assign("https://restaurant-lime-xi.vercel.app/?a=hidden")
    //     }
    //     mobPrevPos = mobCurrPos
    //   }
    // })

  }


  function setCustomMargin() {
    const customMargin = document.querySelectorAll('.custom-margin')
    const container = document.querySelector('.container')
    const containerStyle = container.currentStyle || window.getComputedStyle(container);

    customMargin.forEach((cm) => {
      cm.style.marginLeft = containerStyle.marginLeft
      cm.style.marginRight = containerStyle.marginRight
    })
  }

  if(document.querySelector('.custom-margin')){
    setCustomMargin()

    addEventListener('resize', () => {
      setCustomMargin()
    })
  }

  if(document.querySelector('.terms-text input')) {
    const termsCheckbox = document.querySelector('.terms-text input')

    termsCheckbox.addEventListener('change', () => acceptTerms(termsCheckbox));
  }
  

  function acceptTerms(checkbox) {
    const bookOverlay = document.querySelector('.book-overlay')

    if(checkbox.checked) {
      bookOverlay.classList.add('hide-behind')
    }
    else {
      bookOverlay.classList.remove('hide-behind')
    }
  }
  

  if(document.querySelector('.terms-text input') && document.querySelector('.terms-text-open-dialog')) {
    const omakaseBox = document.querySelector('.nidaime-terms-container')

    openCloseTermsModel()

    if(omakaseBox) {
      const yugenTermsCheckbox = omakaseBox.querySelector('.yugen-terms-container .terms-text input')
      yugenTermsCheckbox.addEventListener('change', () => acceptTerms(omakaseBox));
    }
  }

  function openCloseTermsModel() {
    const termsPopup = document.querySelector('#terms-popup')
    const termsTextOpenDialog = document.querySelector('.terms-text-open-dialog')

    const closeTermsPopup = termsPopup.querySelector('.close-terms-popup')

    termsPopup.addEventListener('click', (e) => {
      if(e.target === termsPopup) {
        termsPopup.classList.add('opacity-0')
        setTimeout(() => {
          termsPopup.classList.add('hidden')
        }, 300)
      }
    })  

    termsTextOpenDialog.addEventListener('click', () => {
      console.log('termsTextOpenDialog')
      termsPopup.classList.remove('hidden')
      termsPopup.classList.remove('opacity-0')
      termsPopup.classList.remove('hidden')
    })
    closeTermsPopup.addEventListener('click', () => {
      termsPopup.classList.add('opacity-0')
      setTimeout(() => {
        termsPopup.classList.add('hidden')
      }, 300)
    })
  }

  if(document.querySelector('.omakaseSwiper')){
    const swiper = new Swiper(".omakaseSwiper", {
      // cssMode: true,
      loop: true,
      responsive: true,
      slidesPerView: 1,
      disableOnInteraction: false, 
      autoplay: {
        delay: 3000,
        loop: true,
      },
      keyboard: true,
      // pagination: {
      //   el: ".swiper-pagination",
      //   type: "fraction",
      // },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    })
  }

})