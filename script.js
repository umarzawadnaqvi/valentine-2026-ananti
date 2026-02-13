let hoverCount = 0;
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const hint = document.getElementById('memory-hint');

noBtn.addEventListener('mouseover', () => {
    hoverCount++;
    
    // Keep NO button within mobile screen bounds
    const padding = 20;
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;
    
    const x = Math.max(padding, Math.random() * maxX);
    const y = Math.max(padding, Math.random() * maxY);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    // Scale YES button gradually
    let scale = 1 + (hoverCount * 0.15);
    yesBtn.style.transform = `scale(${scale})`;

    // Transformation at 5 hovers
    if (hoverCount === 5) {
        yesBtn.classList.add('glass-frame');
        hint.style.opacity = '1';
    }
});

yesBtn.addEventListener('click', () => {
    document.getElementById('main-container').classList.add('hidden');
    document.getElementById('celebration').classList.remove('hidden');
    
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4d6d', '#ffb3c1', '#ffd700']
    });
});
