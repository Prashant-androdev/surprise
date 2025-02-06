document.querySelector(".celebrate_btn").addEventListener("click", () => {
    const confettiContainer = document.querySelector(".confetti");
    confettiContainer.innerHTML = "";

    for (let i = 0; i < 100; i++) {
        const confettiPiece = document.createElement("div");
        confettiPiece.classList.add("confetti-piece");
        confettiPiece.style.left = `${Math.random() * 100}vw`;
        confettiPiece.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confettiPiece.style.animationDelay = `${Math.random()}s`;
        confettiContainer.appendChild(confettiPiece);
    }
});

/* Confetti Styles */
const confettiCSS = document.createElement("style");
confettiCSS.innerHTML = `
@keyframes fall {
    0% { transform: translateY(-100vh) rotate(0deg); }
    100% { transform: translateY(100vh) rotate(720deg); }
}

.confetti-piece {
    position: absolute;
    width: 10px;
    height: 10px;
    background: hsl(${Math.random() * 360}, 100%, 50%);
    opacity: 0.7;
    animation: fall linear infinite;
}
`;
document.head.appendChild(confettiCSS);
