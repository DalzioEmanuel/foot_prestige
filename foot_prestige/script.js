const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

navToggle.addEventListener('click', () => {
  siteNav.classList.toggle('show');
});

window.addEventListener('click', event => {
  if (!siteNav.contains(event.target) && !navToggle.contains(event.target)) {
    siteNav.classList.remove('show');
  }
});

contactForm.addEventListener('submit', event => {
  event.preventDefault();
  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  if (!name || !email || !message) {
    formFeedback.textContent = 'Por favor, preencha todos os campos do formulário.';
    return;
  }

  formFeedback.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
  contactForm.reset();
});

const playerCards = document.querySelectorAll('.player-card');
playerCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-6px)';
    card.style.boxShadow = '0 28px 60px rgba(0,0,0,0.24)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.boxShadow = '';
  });
});
