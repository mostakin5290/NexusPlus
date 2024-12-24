const button = document.querySelector('button');
button.addEventListener('click',()=>{

    // read the data
    const first = document.getElementById('first');
    const num1 = Number(first.value);

    const second = document.getElementById('second');
    const num2 = Number(second.value);

    // output the result

    const result = num1+num2;
    const re =document.getElementById('result')
    
    re.innerHTML="Result:"+result;


})