// variables
const scrollerIcon = document.getElementById('scroller')
const scrollerProgress = document.getElementsByClassName('scroller-progress')[0]
const scrollScreen = document.getElementsByClassName('slides-wrapper')[0]

//listener

window.addEventListener(
  'load',
  () => {
    var moveTouchX = 0,
      startPos = 0,
      centerPos = 296,
      endPos = 588
    const progressStyle = scrollerProgress.style
    const screenStyle = scrollScreen.style
    const iconStyle = scrollerIcon.style
    onTouchStart = () => {
      iconStyle.transition = ''
      progressStyle.transition = ''
      screenStyle.transition = 'all 1s ease 0s'
    }

    onTouchMove = (e) => {
      moveTouchX = e.touches[0].clientX
      const q = (document.body.offsetWidth - endPos) / 2
      const w = startPos + moveTouchX
      let r = w - q

      if (r <= startPos) {
        progressStyle.width = startPos + 'px'
        screenStyle.transform = `translateX(${startPos}px)`
      } else if (r >= endPos) {
        progressStyle.width = endPos + 'px'
        screenStyle.transform = `translateX(${-2056}px)`
      } else if (r > 0 && r < centerPos / 2) {
        iconStyle.transform = `translate(${r}px, -50%)`
        progressStyle.width = r + 'px'
      } else if (r > centerPos / 2 && r < centerPos + centerPos / 2) {
        iconStyle.transform = `translate(${r}px, -50%)`
        progressStyle.width = r + 'px'
        screenStyle.transform = `translateX(${-1028}px)`
      } else {
        iconStyle.transform = `translate(${r}px, -50%)`
        progressStyle.width = r + 'px'
      }
      if (r < centerPos / 2) {
        screenStyle.transform = `translateX(${startPos}px)`
      } else if (r > centerPos + centerPos / 2) {
        screenStyle.transform = `translateX(${-2056}px)`
      }
    }
    onTouchEnd = () => {
      const q = (document.body.offsetWidth - endPos) / 2
      const w = startPos + moveTouchX
      let r = w - q
      iconStyle.transition = 'all 1s ease 0s'
      progressStyle.transition = 'all 1s ease 0s'

      if (r <= startPos) {
        iconStyle.transform = `translate(${startPos}px, -50%)`
        progressStyle.width = startPos + 'px'
        screenStyle.transform = `translateX(${0}px)`
      } else if (r >= endPos) {
        iconStyle.transform = `translate(${endPos}px, -50%)`
        progressStyle.width = endPos + 'px'
        screenStyle.transform = `translateX(${-2056}px)`
      } else if (r > 0 && r < centerPos / 2) {
        iconStyle.transform = `translate(${startPos}px, -50%)`
        progressStyle.width = startPos + 'px'
        screenStyle.transform = `translateX(${0}px)`
      } else if (r > centerPos / 2 && r < centerPos + centerPos / 2) {
        iconStyle.transform = `translate(${centerPos}px, -50%)`
        progressStyle.width = centerPos + 'px'
        screenStyle.transform = `translateX(${-1028}px)`
      } else {
        iconStyle.transform = `translate(${endPos}px, -50%)`
        progressStyle.width = endPos + 'px'
        screenStyle.transform = `translateX(${-2056}px)`
      }
    }
    scrollerIcon.addEventListener('touchstart', onTouchStart, false)
    scrollerIcon.addEventListener('touchmove', onTouchMove, false)
    scrollerIcon.addEventListener('touchend', onTouchEnd, false)
  },
  false
)
