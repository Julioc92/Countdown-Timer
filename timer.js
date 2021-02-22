
    const timeLeftDisplay = document.querySelector('#time-left')
    const startBtn = document.querySelector('#start-button')
   
    let timeLeft = 10

    function countDown(){
        setInterval(function(){  // function loop 
            if(timeLeft <= 0 ){  // this will stop the count at zero
               clearInterval(timeLeft = 0)
            }
            // it will loop minus one every 1000 milliseconds
            timeLeftDisplay.innerHTML = timeLeft
            timeLeft -=1
        }, 1000) 
    }

    // start the count down on a click
    startBtn.addEventListener('click', countDown)
