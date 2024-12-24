const randomColors = [
    "#00FF00", "#0000FF", "#FFFF00", "#FF00FF",
    "#00FFFF", "#FFAA00", "#AAFF00",
    "#00AAFF", "#AA00FF", "#FF0055", "#55FF00", "#0055FF",
    "#FF5500", "#55AAFF", "#AA55FF", "#FFAA55", "#55FFAA"
];
let count = 1;

document.body.addEventListener("click", () => {
    const circle = document.createElement('div');
    circle.className = 'circle';
    circle.textContent = `${count++}`;

    const x=event.clientX;
    const y=event.clientY;

    circle.style.left=`${x-25}px`;
    circle.style.top=`${y-25}px`;

    const random = Math.floor(Math.random()*randomColors.length)
    circle.style.background = randomColors[random];
    document.body.appendChild(circle);

    setTimeout(()=>{
        circle.remove();
    },5000)
})