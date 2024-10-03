document.getElementById("incrementbtn").addEventListener("click",incrementcounter);
document.getElementById("decrementbtn").addEventListener("click",decrementcounter);
document.getElementById("resetbtn").addEventListener("click",resetcounter);

let counterdisplay= document.getElementById("counter-display");
let counterValue= 0;

function updatecounterdisplay() {
    counterdisplay.textContent= counterValue;
}

function incrementcounter() {
    counterValue++;
    updatecounterdisplay();
}

function decrementcounter() {
    if(counterValue>0){
    counterValue--;
    updatecounterdisplay();
    }
}

function resetcounter() {
    counterValue=0;
    updatecounterdisplay();

}