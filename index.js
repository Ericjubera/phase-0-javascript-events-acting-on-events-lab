

const dodger = document.getElementById('dodger');

function moveDodgerLeft() {
    const leftNumebr=dodger.style.left.replace("px","")
    const left = parseInt(leftNumebr,10);
    if (left>0){
        dodger.style.left=`${left-1}px`
    }
}

document.addEventListener("keydown",function(event){
    if(event.key==="ArrowLeft"){
        moveDodgerLeft();
    }
})

function moveDodgerRight(){
    const leftNumebr=dodger.style.left.replace("px","")
    const left=parseInt(leftNumebr,10);
    if(left>0)[
        dodger.style.left=`${left+1}px`
    ]

}
document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight()
    }})