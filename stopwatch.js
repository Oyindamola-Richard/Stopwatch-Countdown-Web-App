const stopwatchStart = ()=>{
    Number(milliSec.innerHTML++)
    let setTime = setTimeout('stopwatchStart()', '9');
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

// const stopwatchPause = ()=>{
//     clearTimeout('setTime()', 1000)
// }

const stopwatchReload = ()=>{
location.reload()
}

const countdownPage = ()=>{
    window.location.href = "countdown.html"
}