function switchTab(tabId, event) {
  const tabs = document.querySelectorAll('.tab-content');
  const buttons = document.querySelectorAll('.tab-button');

  tabs.forEach((tab) => {
    tab.classList.toggle('active', tab.id === tabId);
  });

  buttons.forEach((button) => {
    button.classList.toggle('active', button.textContent.trim() === document.getElementById(tabId).querySelector('h3').textContent.trim());
  });

  if (event && event.currentTarget) {
    event.currentTarget.classList.add('active');
  }
}

document.querySelectorAll('.islamic-card').forEach((card) => {
  card.addEventListener('mousemove', (event) => {
    const rect = card.getBoundingClientRect();
    const xAxis = ((event.clientX - rect.left) / rect.width - 0.5) * 12;
    const yAxis = ((event.clientY - rect.top) / rect.height - 0.5) * -12;
    card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'none';
  });
});

window.addEventListener('scroll', () => {
  document.querySelectorAll('.section-heading').forEach((heading) => {
    const position = heading.getBoundingClientRect().top;
    const screenPosition = window.innerHeight * 0.8;

    if (position < screenPosition) {
      heading.style.opacity = '1';
      heading.style.transform = 'translateY(0)';
    }
  });
});

const sectionHeadings = document.querySelectorAll('.section-heading');
sectionHeadings.forEach((heading) => {
  heading.style.opacity = '0';
  heading.style.transform = 'translateY(18px)';
  heading.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

const defaultTab = document.querySelector('.tab-button.active');
if (defaultTab) {
  defaultTab.classList.add('active');
}

window.dispatchEvent(new Event('scroll'));

