window.addEventListener('load', () => {
  const options = [
    {
      top: 33,
      left: 877,
    },
    {
      top: 161,
      left: 82,
    },
    {
      top: 442,
      left: 232,
    },
    {
      top: 585,
      left: 713,
    },
    {
      top: 112,
      left: 911,
    },
    {
      top: 227,
      left: 666,
    },
    {
      top: 554,
      left: 21,
    },
    {
      top: 94,
      left: 474,
    },
    {
      top: 239,
      left: 46,
    },
    {
      top: 571,
      left: 899,
    },
    {
      top: 109,
      left: -5,
    },
    {
      top: 212,
      left: 936,
    },
    {
      top: 588,
      left: 153,
    },
  ]
  for (let i = 0; i < 4; i++) {
    var iceBlock = document.getElementsByClassName(`ice-block-${i + 1}`)
    iceBlock[0].style = `top:${options[i].top}px;left:${options[i].left}px`
  }
  for (let i = 4; i < 7; i++) {
    var iceBlock = document.getElementsByClassName(`ice-block-${i + 1}`)
    iceBlock[0].style = `top:${options[i].top}px;left:${options[i].left}px`
  }
  for (let i = 7; i < 10; i++) {
    var iceBlock = document.getElementsByClassName(`ice-block-${i + 1}`)
    iceBlock[0].style = `top:${options[i].top}px;left:${options[i].left}px`
  }

  for (let i = 10; i < 13; i++) {
    var iceBlock = document.getElementsByClassName(`ice-block-${i + 1}`)
    iceBlock[0].style = `top:${options[i].top}px;left:${options[i].left}px`
  }
})
