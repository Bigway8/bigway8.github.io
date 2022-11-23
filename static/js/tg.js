const TELEGRAM_URI = `https://api.telegram.org/bot5917789698:AAEDrfFN2HAqte2A2hj59RNnwl-99oWYZdk/`
const message =
  '🤬Пора сдавать ДТП \n @revindenis @AliceKoti @LNAG2 @AndreyKudri'
const my_id = 440192765
const chat_id = -1001792969931

async function getMe(url) {
  await fetch(url + `sendMessage?chat_id=${my_id}&text=${message}`, {
    method: 'post',
  })
}
setInterval(() => {
  const time = `${new Date().getHours()}:${
    new Date().getMinutes() < 10
      ? '0' + new Date().getMinutes()
      : new Date().getMinutes()
  }`
  if (time == '17:15') {
    getMe(TELEGRAM_URI)
  }
}, 10 * 1000)
