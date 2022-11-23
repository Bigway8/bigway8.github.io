const TELEGRAM_URI = `https://api.telegram.org/bot5917789698:AAEDrfFN2HAqte2A2hj59RNnwl-99oWYZdk/`
const message =
  '🤬Пора сдавать ДТП \n @revindenis @AliceKoti @LNAG2 @AndreyKudri'
const chat_id = -1001792969931

async function getMe(url) {
  await fetch(url + `sendMessage?chat_id=${chat_id}&text=${message}`, {
    method: 'post',
  })
}
setInterval(() => {
  const time = `${new Date().getHours()}:${
    new Date().getMinutes() < 10
      ? '0' + new Date().getMinutes()
      : new Date().getMinutes()
  }`
  if (time == '11:30') {
    getMe(TELEGRAM_URI)
  }
}, 60 * 1000)
