const right = document.getElementById("btnRight"),
    left = document.getElementById("btnLeft"),
    ul = document.getElementsByClassName("slideList"),
    li = Array.from(document.getElementsByClassName("contentsSlide"));
    radio = document.getElementsByName("slide");
    
const whatSlide = ["date","todoList","weather"];
var pos = 1;

function addBtnEvent(){
    right.addEventListener("click",function(event){
        pos = (pos+1)%3;
        radio[pos].checked = true;
        changeSlide(whatSlide[pos]);
    })
    left.addEventListener("click",function(event){
        pos=(pos-1<0?2:--pos);
        radio[pos].checked = true;
        changeSlide(whatSlide[pos]);
    })
}

function changeSlide(item){
    if(item==="date"){
        li.forEach(function(element){
            element.style.transform=`translateX(100%)`;
        });
    }else if(item==="todoList"){
        li.forEach(function(element){
            element.style.transform=`translateX(0%)`;
        });
    }else{
        li.forEach(function(element){
            element.style.transform=`translateX(-100%)`;
        });
    }
}

function getChangedRadio(){
    radio.forEach(element => {
        element.addEventListener("click", function(event) {
            var item = event.target.id;
            changeSlide(item);
          });
    });
}

function init(){
    getChangedRadio();
    addBtnEvent();
}

init();