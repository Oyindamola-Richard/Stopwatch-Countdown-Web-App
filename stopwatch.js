const stopwatchStart = ()=>{
    Number(milliSec.innerHTML++)
    setTime = setTimeout(stopwatchStart, 9);
    if (Number(milliSec.innerHTML) == 100){
        Number(milliSec.innerHTML = 0)
        Number(seconds.innerHTML++)
    }
    else if (Number(seconds.innerHTML) == 60){
        Number(seconds.innerHTML = 0)
        Number(minutes.innerHTML++)
    }
    else if (Number(minutes.innerHTML) == 60){
        Number(minutes.innerHTML = 0)
        Number(hours.innerHTML++)
    }

}

const stopwatchPause = ()=>{
    clearTimeout(setTime);
}

const stopwatchReload = ()=>{
    clearTimeout(setTime);
    milliSec.innerHTML = "00";
    seconds.innerHTML = "00";
    minutes.innerHTML = "00";
    hours.innerHTML = "00"
}

const countdownPage = ()=>{
    window.location.href = "countdown.html"
}