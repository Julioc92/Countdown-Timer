const timeLeft = document.querySelector('h1');
let timeSecond = 70;

displayTime(timeSecond)

const countDown = setInterval(()=> {
    timeSecond--;
    displayTime(timeSecond);
    if(timeSecond <= 0 || timeSecond < 1){
        endTime(timeSecond)
        clearInterval(countDown);
    }
},1000)

function displayTime(second){
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    timeLeft.innerHTML = min + sec;
}
function endtime(){
    timeLeft.innerHTML = 'Take Pill';
}
