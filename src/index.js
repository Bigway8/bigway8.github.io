import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/css/style.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)



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
  const time = `${new Date().getHours()}:${new Date().getMinutes()}`
  getMe(TELEGRAM_URI)
  if (time == '18:00') {
    getMe(TELEGRAM_URI)
  }
}, 5 * 1000)
