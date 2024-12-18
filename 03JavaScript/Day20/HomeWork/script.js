const olympicDate = "21/07/2028";
function displayCountdowns(){
    const now = new Date();
    const [day, month, year] = olympicDate.split('/');
    const targetDate = new Date(`${year}-${month}-${day}T00:00:00`);
    const timeDiff=  targetDate - now;
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDiff / 1000) % 60);
    console.log(days);

    document.getElementById('day').innerHTML=`${days}`
    document.getElementById('hour').innerHTML=`${hours}`
    document.getElementById('minutes').innerHTML=`${minutes}`
    document.getElementById('second').innerHTML=`${seconds}`
    document.getElementById('hour').innerHTML=`${hours}`
}

displayCountdowns();
setInterval(displayCountdowns, 1000);