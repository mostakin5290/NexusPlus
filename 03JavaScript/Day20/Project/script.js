
function timing(){
    const timer=document.getElementById('root');
    const now = new Date();
    const indiaTime = now.toLocaleTimeString();
    timer.innerHTML = indiaTime;
}
setInterval(timing,1000) ;





const timer=document.getElementById('root');
const now = new Date();
const indiaTime = now.toLocaleTimeString();
timer.innerHTML = indiaTime;

timer.style.fontSize = "150px";
timer.style.height = "90vh";
timer.style.display = "flex";
timer.style.justifyContent = "center";
timer.style.alignItems = "center";
