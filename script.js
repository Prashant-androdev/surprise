const messages = [
    "Are you sure? 😢",
    "Really sure?? 🤨",
    "Pookie please... 🥺",
    "Think again! 🤔",
    "I'll be so sad... 😭",
    "My heart will break 💔",
    "Last chance! ⚠️",
    "Okay, I'll stop... 😞",
    "Just kidding! PLEASE! 🙏",
    "FINE, I'll ask nicely... ❤️",
    "But we are perfect together! 💑",
    "What did I do wrong? 😭",
    "You're breaking my heart! 💘",
    "Even Romeo wouldn't give up! 😤",
    "Think about our future! 🏡",
    "I have chocolates... 🍫",
    "I have flowers too... 🌹",
    "You're making me nervous! 😳",
    "How could you say no to this face? 🥺",
];


let messageIndex = 0;
let yesSize = 1.5;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    
    yesSize *= 1.2;
    yesButton.style.transform = `scale(${yesSize})`;
    
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noButton.style.transform = `translate(${x}px, ${y}px)`;
}

function handleYesClick() {
    document.body.classList.add('celebrate');
    setTimeout(() => {
        window.location.href = "yes_page.html";
    }, 2000);
}

/* Floating Hearts */
setInterval(() => {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.querySelector(".hearts").appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}, 500);
