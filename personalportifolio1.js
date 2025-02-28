function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.display = 'none';
    });
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(tabId).style.display = 'block';
    event.currentTarget.classList.add('active');
}

document.querySelectorAll('.islamic-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const xAxis = (card.offsetWidth / 2 - e.offsetX) / 15;
        const yAxis = (card.offsetHeight / 2 - e.offsetY) / 15;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'none';
    });
});

window.addEventListener('scroll', () => {
    document.querySelectorAll('.section-title').forEach(title => {
        const titlePosition = title.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (titlePosition < screenPosition) {
            title.style.opacity = '1';
            title.style.transform = 'translateY(0)';
        }
    });
});
