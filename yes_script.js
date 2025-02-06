function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'absolute';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.top = Math.random() * 100 + '%';
    heart.style.fontSize = (20 + Math.random() * 30) + 'px';
    heart.style.animation = `float ${2 + Math.random() * 3}s ease-in-out`;
    document.querySelector('.hearts').appendChild(heart);
    
    setTimeout(() => heart.remove(), 3000);
}

// Create initial celebration
for (let i = 0; i < 50; i++) {
    setTimeout(createHeart, i * 100);
}

// Add continuous hearts on click
document.addEventListener('click', () => {
    for (let i = 0; i < 10; i++) {
        createHeart();
    }
});

// Initial animation
document.querySelector('.container').style.opacity = 0;
setTimeout(() => {
    document.querySelector('.container').style.transition = 'opacity 1s ease, transform 1s ease';
    document.querySelector('.container').style.opacity = 1;
}, 100);