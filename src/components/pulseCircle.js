// variables

const pulseCircle = document.getElementsByClassName('pulse-circle')
const circleWrap = document.getElementsByClassName('pulse-circle-wrap')

// listener

window.addEventListener('load', () => {
  const PulseCircle = () => {
    const options = [
      {
        size: 52,
        text: 'Цель по HbA1c',
        left: 562,
        top: 262,
        textTop: 14,
        textLeft: 64,
      },
      {
        size: 27,
        text: 'Гипогликемия',
        left: 274,
        top: 428,
        textTop: -35,
        textLeft: -50,
      },
      {
        size: 16,
        text: 'Осложнения СД',
        left: 480,
        top: 539,
        textTop: -34,
        textLeft: -110,
      },
      {
        size: 16,
        text: 'СС риски',
        left: 823,
        top: 517,
        textTop: -32,
        textLeft: -31,
      },
    ]
    function circleOne() {
      const n = 0
      var subSize = Math.ceil(options[n].size / 3)
      var subPos = Math.floor(options[n].size / 3)
      var circleSub = `height:${subSize}px;width:${subSize}px;top:${subPos}px;left:${subPos}px`
      pulseCircle[n].style = `top:${options[n].top}px;left:${options[n].left}px`
      circleWrap[n].children[0].innerText = options[n].text
      circleWrap[
        n
      ].children[0].style = `top:${options[n].textTop}px;left:${options[n].textLeft}px`
      circleWrap[
        n
      ].children[1].style = `height:${options[n].size}px;width:${options[n].size}px`
      for (let i = 2; i < 5; i++) {
        circleWrap[n].children[i].style = circleSub
      }
    }
    function circleTwo() {
      const n = 1
      var subSize = Math.ceil(options[n].size / 3)
      var subPos = Math.floor(options[n].size / 3)
      var circleSub = `height:${subSize}px;width:${subSize}px;top:${subPos}px;left:${subPos}px`
      pulseCircle[n].style = `top:${options[n].top}px;left:${options[n].left}px`
      circleWrap[n].children[0].innerText = options[n].text
      circleWrap[
        n
      ].children[0].style = `top:${options[n].textTop}px;left:${options[n].textLeft}px`
      circleWrap[
        n
      ].children[1].style = `height:${options[n].size}px;width:${options[n].size}px`
      for (let i = 2; i < 5; i++) {
        circleWrap[n].children[i].style = circleSub
      }
    }
    function circleTree() {
      const n = 2
      var subSize = Math.ceil(options[n].size / 3)
      var subPos = Math.floor(options[n].size / 3)
      var circleSub = `height:${subSize}px;width:${subSize}px;top:${subPos}px;left:${subPos}px`
      pulseCircle[n].style = `top:${options[n].top}px;left:${options[n].left}px`
      circleWrap[n].children[0].innerText = options[n].text
      circleWrap[
        n
      ].children[0].style = `top:${options[n].textTop}px;left:${options[n].textLeft}px`
      circleWrap[
        n
      ].children[1].style = `height:${options[n].size}px;width:${options[n].size}px`
      for (let i = 2; i < 5; i++) {
        circleWrap[n].children[i].style = circleSub
      }
    }
    function circleFour() {
      const n = 3
      var subSize = Math.ceil(options[n].size / 3)
      var subPos = Math.floor(options[n].size / 3)
      var circleSub = `height:${subSize}px;width:${subSize}px;top:${subPos}px;left:${subPos}px`
      pulseCircle[n].style = `top:${options[n].top}px;left:${options[n].left}px`
      circleWrap[n].children[0].innerText = options[n].text
      circleWrap[
        n
      ].children[0].style = `top:${options[n].textTop}px;left:${options[n].textLeft}px`
      circleWrap[
        n
      ].children[1].style = `height:${options[n].size}px;width:${options[n].size}px`
      for (let i = 2; i < 5; i++) {
        circleWrap[n].children[i].style = circleSub
      }
    }
    circleOne(), circleTwo(), circleTree(), circleFour()
  }
  PulseCircle()
})
