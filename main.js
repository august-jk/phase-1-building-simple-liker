// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const heart = document.querySelectorAll('span.like-glyph')
const error = document.querySelector('#modal')
error.className = 'hidden'
document.addEventListener('DOMContentLoaded', () => 
heart.forEach(item => item.addEventListener('click', callServer)))

const callServer = (event) => {
mimicServerCall()
.then(() => handleEvent(event))
.catch(() => handleError(event))
}

const handleEvent = (event) =>
    {if(event.target.textContent === EMPTY_HEART){
      event.target.classList.add('activated_heart')
      event.target.textContent = FULL_HEART
    }
    else if (event.target.textContent === FULL_HEART){
      event.target.classList.remove('activated_heart')
      event.target.textContent = EMPTY_HEART
    }}

const handleError = () => {
    error.className = 'show'
   setTimeout(() => {error.className = 'hidden'}, 3000) }





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
