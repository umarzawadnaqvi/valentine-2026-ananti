let hoverCount = 0;
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const hint = document.getElementById('memory-hint');

noBtn.addEventListener('mouseover', () => {
    hoverCount++;
    
    // 1. Move the NO button randomly
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    // 2. Scale the YES button
    let scale = 1 + (hoverCount * 0.4);
    yesBtn.style.transform = `scale(${scale})`;

    // 3. Transformation at 5 hovers
    if (hoverCount === 5) {
        yesBtn.classList.add('glass-frame');
        hint.style.opacity = '1';
    }
});

yesBtn.addEventListener('click', () => {
    document.getElementById('main-container').classList.add('hidden'); // Hide question
    document.getElementById('celebration').classList.remove('hidden'); // Show photos
    // Add confetti here if you want!
});
    // Fireworks/Confetti burst
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4d6d', '#ffb3c1', '#ffd700']
    });
});
