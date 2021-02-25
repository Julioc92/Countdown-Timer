const timeLeft = document.querySelector('#time-left');
let timeSecond = 120;

displayTime(timeSecond)

const countDown = setInterval(()=> {
    timeSecond--;
    displayTime(timeSecond);
    if(timeSecond <= 0 || timeSecond < 1){
        //endTime(timeSecond);
        clearInterval(countDown);
        //endTime(time
    }
},1000)

function displayTime(second){
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    timeLeft.innerHTML = min + ':' + sec;
}

//function endtime(massage){
    //timeLeft.innerHTML = "Take the Pill";
//}
