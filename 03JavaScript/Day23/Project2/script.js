const grandParent = document.getElementById('grandParent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

child.addEventListener('click',()=>{
    console.log("child Clicked");
},false);
parent.addEventListener('click',()=>{
    console.log("parent Clicked");
},false);
grandParent.addEventListener('click',()=>{
    console.log("grandParent Clicked");
},false);