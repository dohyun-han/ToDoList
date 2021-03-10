const ul = document.getElementsByClassName("slideList"),
    li = Array.from(document.getElementsByClassName("contentsSlide"));
    radio = document.getElementsByName("slide");


function changeSlide(item){
    console.log(li);
    if(item.id==="date"){
        li.forEach(function(element){
            element.style.transform=`translateX(100%)`;
        });
    }else if(item.id==="todoList"){
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
            var item = event.target;
            changeSlide(item);
          });
    });
}
function getCheckedRadio(){

}

function init(){
    getCheckedRadio();
    getChangedRadio();
}

init();