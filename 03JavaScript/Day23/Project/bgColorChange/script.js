// const red = document.getElementById('red');
// const blue = document.getElementById('blue');
// const orange = document.getElementById('orange');
// const green = document.getElementById('green');
// const purple = document.getElementById('purple');
// const body = document.body;
// red.addEventListener('click',()=>{
//     body.style.background ='red';
// })

// const buttons = document.querySelectorAll('button');
// buttons.forEach((button)=>{
//     const body = document.body;
//     button.addEventListener('click',()=>{
//         body.style.background=button.id;
//     })
// })

const root = document.querySelector(".root");
// mousemove
root.addEventListener('click',()=>{
    if(event.target.tagName==='BUTTON')
    document.body.style.background = event.target.id;
})