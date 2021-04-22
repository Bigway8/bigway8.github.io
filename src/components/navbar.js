// variables

var root = document.getElementById('root')
var navbarItem = document.getElementsByClassName('navbar-item')
var appWrapper = document.getElementsByClassName('App-wrapper')[0]

// listener

window.addEventListener(
  'load',
  () => {
    var startTouchY,
      endTouchY,
      curentPage = 0
    const translatePage = () => {
      curentPage === 0
        ? (appWrapper.style.transform = 'translateY(0px)')
        : curentPage === 1
        ? (appWrapper.style.transform = 'translateY(-768px)')
        : (appWrapper.style.transform = 'translateY(-1536px)')
    }
    const navbarColor = () => {
      curentPage === 0
        ? (navbarItem[0].style.background = '#f78b1f')
        : (navbarItem[0].style.background = '#fff')
      curentPage === 1
        ? (navbarItem[1].style.background = '#f78b1f')
        : (navbarItem[1].style.background = '#fff')
      curentPage === 2
        ? (navbarItem[2].style.background = '#f78b1f')
        : (navbarItem[2].style.background = '#fff')
    }
    translatePage()
    navbarColor()
    onTouchStart = (e) => {
      startTouchY = e.touches[0].clientY
    }
    onTouchEnd = (e) => {
      endTouchY = e.changedTouches[0].clientY
      if (startTouchY - endTouchY > 50 && curentPage <= 1) {
        curentPage += 1
        translatePage()
        navbarColor()
      }
      if (startTouchY - endTouchY < -50 && curentPage >= 1) {
        curentPage -= 1
        translatePage()
        navbarColor()
      }
    }

    root.addEventListener('touchstart', onTouchStart, false)
    root.addEventListener('touchend', onTouchEnd, false)
  },
  false
)
