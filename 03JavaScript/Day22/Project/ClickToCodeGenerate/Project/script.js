const quotes = [
    "The best way to predict the future is to create it. – Peter Drucker",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Do what you can, with what you have, where you are. – Theodore Roosevelt",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",

    "In the middle of every difficulty lies opportunity. – Albert Einstein",
    "Happiness depends upon ourselves. – Aristotle",
    "Knowing yourself is the beginning of all wisdom. – Aristotle",
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    "Life isn’t about finding yourself. It’s about creating yourself. – George Bernard Shaw",

    "People say nothing is impossible, but I do nothing every day. – A.A. Milne",
    "I’m not arguing; I’m just explaining why I’m right. – Anonymous",
    "You can’t have everything. Where would you put it? – Steven Wright",
    "I have not failed. I’ve just found 10,000 ways that won’t work. – Thomas Edison",
    "Behind every great man is a woman rolling her eyes. – Jim Carrey",

    "The harder you work for something, the greater you’ll feel when you achieve it. – Anonymous",
    "Don’t stop when you’re tired. Stop when you’re done. – Marilyn Monroe",
    "Dream big and dare to fail. – Norman Vaughan",
    "Great things are done by a series of small things brought together. – Vincent Van Gogh",
    "What we fear of doing most is usually what we most need to do. – Ralph Waldo Emerson",

    "The unexamined life is not worth living. – Socrates",
    "The journey of a thousand miles begins with one step. – Lao Tzu",
    "Do not go where the path may lead; go instead where there is no path and leave a trail. – Ralph Waldo Emerson",
    "We are what we repeatedly do. Excellence, then, is not an act, but a habit. – Aristotle",
    "Man is the only creature who refuses to be what he is. – Albert Camus",

    "To love and be loved is to feel the sun from both sides. – David Viscott",
    "Love is composed of a single soul inhabiting two bodies. – Aristotle",
    "The greatest thing you’ll ever learn is just to love and be loved in return. – Eden Ahbez",
    "In the end, we only regret the chances we didn’t take. – Anonymous",
    "Love looks not with the eyes, but with the mind. – William Shakespeare"
];

function change(){
    let random_code = Math.floor(Math.random()*quotes.length);
    let text = document.querySelector(".quote");
    text.innerHTML = quotes[random_code];
    
}

function colorChange(){
    let random1 = Math.floor(Math.random()*255);
    let random2 = Math.floor(Math.random()*255);
    let random3 = Math.floor(Math.random()*255);

    const text = document.querySelector("h1");
    text.style.color=`rgb(${random1},${random2},${random3})`;
    let body = document.querySelector("#body");
    body.style.backgroundColor = `rgb(${random1},${random2},${random3})`;
}

const button = document.querySelector("button");
button.addEventListener('click',()=>{
    change();
    colorChange();
})

