const time = document.querySelector(".timeContainer"),
    cal = document.querySelector(".dateContainer");

const dayList = ["Sunday","Monday"
,"Tuseday","Wednesday","Thursday","Friday","Saturday"]

function nowTime(){
    const today = new Date();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();
    time.innerText = `${hours<10?`0${hours}`:`${hours}`}:`+
                    `${minutes<10?`0${minutes}`:`${minutes}`}:`+
                    `${seconds<10?`0${seconds}`:`${seconds}`}`;
    const day = today.getDay();
    const month = today.getMonth()+1;
    const date = today.getDate();
    cal.innerText = `${month<10?`0${month}`:`${month}`}/`+
                    `${date<10?`0${date}`:`${date}`}
                    ${dayList[day]}`

}

function init(){
    nowTime();
    setInterval(nowTime,1000);
}

init();