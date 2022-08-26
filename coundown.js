const song = new Audio('Fireboy-DML-Sofri-(JustNaija.com).mp3');

const countdownStart = ()=>{
    let countdownSec = setSec.value
    let countdownMin = setMin.value
    let countdownHrs = setHrs.value
    countdownSec--;
    setSec.value = countdownSec
    setTimeout(countdownStart, 1000);
    if(countdownSec < 1 && countdownMin == 0){
        song.play()
        setSec.value = ""
        setMin.value = ""
        setHrs.value = ""
    }
    if(countdownSec < 0 && setMin.value > 0){
        setSec.value = "59"
    }
    if(countdownSec < 0 && countdownMin > 0){
        setMin.value--
    }
    if(countdownMin == 0 && setHrs.value > 0){
        setMin.value = "60"
    }
    if(countdownMin == 0 && countdownHrs > 0){
        setHrs.value--
    }
    // else if(((countdownHrs == "") || (countdownMin == "") || countdownSec == "")){
    //     disp.innerHTML= "input digit"
    // }
}
const countdownReload = ()=>{
    location.reload()
}


