// set minutes
var mins = 25;

// calculate seconds
var secs = mins * 60;

window.onload = function () {
  let minutes = document.querySelector('.minutes');
  let seconds = document.querySelector('.seconds');
  minutes.value = '';
  seconds.value = '';
};

const start = document.querySelector('.start_button');

start.addEventListener('click', () => {
  if (start.innerHTML == 'Start') {
    resetStyling();
    countdown();
  } else if (start.innerHTML == 'Reset') {
    minutes.value = '';
    seconds.value = '';
    window.location += '';
    console.log('asdf');
  }
});

start.addEventListener('click');

// reset button click styling
function resetStyling() {
  start.textContent = 'Reset';
  start.style.backgroundColor = 'rgb(255, 48, 75)';
  start.style.transition = 'linear';
}

// countdown function evoked when page is loaded
function countdown() {
  setTimeout('decrement()', 60);
}

// decrement function to decrement the value
function decrement() {
  if (document.querySelector) {
    minutes = document.querySelector('.minutes');
    seconds = document.querySelector('.seconds');

    // if less than one minute
    // display only seconds value
    if (seconds < 59) {
      seconds.value = secs;
    }

    // display both minutes and seconds
    // getMinutes & getSeconds will get minutes and seconds
    else {
      // prepend a zero onto minutes when one digit
      if (mins < 10) {
        minutes.value = '0' + getMinutes();
        // take rightmost two characters
        // prepend a zero onto the front of value
        seconds.value = ('0' + getSeconds()).slice(-2);
      } else {
        minutes.value = getMinutes();
        // take rightmost two characters
        // prepend a zero onto the front of value
        seconds.value = ('0' + getSeconds()).slice(-2);
      }
    }

    if (secs < 20) {
      readout = document.querySelector('.timer_readout');
      readout.style.backgroundColor = 'indianRed';
      readout.style.borderColor = 'aliceBlue';
    }

    // if seconds becomes zero
    // alert time expiry
    if (mins < 0) {
      minutes.value = '';
      seconds.value = '';
      play();
      setTimeout(function () {
        window.location += '';
      }, 4000);
    }

    // if seconds is greater than zero
    // decrement seconds
    else {
      secs--;
      setTimeout('decrement()', 1000);
    }
  }
}

function getMinutes() {
  // calculate minutes
  // divide secs by 60 and round down
  mins = Math.floor(secs / 60);
  return mins;
}

function getSeconds() {
  // subtract minutes remaining (in seconds)
  // from total seconds remaining
  return secs - Math.round(mins * 60);
}

function play() {
  // add audio notification
  const audio = new Audio('http://soundbible.com/grab.php?id=2145&type=mp3');
  audio.play();
}
