const messages = [
    "Are you sure?",
    "Really sure??",
    "Pookie please...",
    "Think again!",
    "I'll be so sad...",
    "My heart will break 💔",
    "Last chance!",
    "Okay, I'll stop...",
    "Just kidding! PLEASE!",
    "FINE, I'll ask nicely... ❤️"
];

let messageIndex = 0;
let yesSize = 1.5;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    
    // Update button text
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    
    // Increase yes button size
    yesSize *= 1.2;
    yesButton.style.transform = `scale(${yesSize})`;
    
    // Add random movement
    const x = Math.random() * 100 - 50;
    const y = Math.random() * 100 - 50;
    noButton.style.transform = `translate(${x}px, ${y}px)`;
    
    // Create floating heart
    createHeart();
}

function handleYesClick() {
    // Add celebration effect
    document.body.classList.add('celebrate');
    setTimeout(() => {
        window.location.href = "yes_page.html";
    }, 2000);
}

function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'absolute';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.top = Math.random() * 100 + '%';
    heart.style.animation = `float ${2 + Math.random() * 3}s ease-in-out`;
    document.querySelector('.hearts').appendChild(heart);
    
    setTimeout(() => heart.remove(), 3000);
}

// Add initial animation
document.querySelector('.container').style.opacity = 0;
setTimeout(() => {
    document.querySelector('.container').style.transition = 'opacity 1s ease';
    document.querySelector('.container').style.opacity = 1;
}, 100);