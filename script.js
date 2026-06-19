const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

if (navToggle && siteNav) {
  const navClose = document.getElementById('navClose');

  function openMenu() {
    const isOpen = siteNav.classList.add('show');
    navToggle.setAttribute('aria-expanded', 'true');
    // focus first focusable element inside menu
    const focusable = siteNav.querySelectorAll('a, button');
    if (focusable && focusable.length) focusable[0].focus();
  }

  function closeMenu() {
    siteNav.classList.remove('show');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.focus();
  }

  navToggle.addEventListener('click', () => {
    if (siteNav.classList.contains('show')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  if (navClose) {
    navClose.addEventListener('click', () => closeMenu());
  }

  // Close menu when clicking outside
  window.addEventListener('click', event => {
    if (siteNav.classList.contains('show') && !siteNav.contains(event.target) && !navToggle.contains(event.target)) {
      closeMenu();
    }
  });

  // Close menu with Escape key and trap focus while open
  window.addEventListener('keydown', event => {
    if (event.key === 'Escape' && siteNav.classList.contains('show')) {
      closeMenu();
      return;
    }

    if (!siteNav.classList.contains('show')) return;

    if (event.key === 'Tab') {
      const focusable = Array.from(siteNav.querySelectorAll('a, button'));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', event => {
    event.preventDefault();
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
      if (formFeedback) formFeedback.textContent = 'Por favor, preencha todos os campos do formulário.';
      return;
    }

    if (formFeedback) formFeedback.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
    contactForm.reset();
  });
}

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

// Carousel de Parceiros
class PartnersCarousel {
  constructor() {
    this.carousel = document.getElementById('partnersCarousel');
    this.prevBtn = document.querySelector('.carousel-prev');
    this.nextBtn = document.querySelector('.carousel-next');
    this.dotsContainer = document.getElementById('carouselDots');

    if (!this.carousel) return;

    this.items = Array.from(this.carousel.querySelectorAll('.partner-item'));
    this.itemsPerView = this.getItemsPerView();
    this.currentIndex = 0;
    this.autoPlayInterval = null;

    this.init();
  }

  getItemsPerView() {
    if (window.innerWidth <= 720) return 1;
    if (window.innerWidth <= 960) return 2;
    return 4;
  }

  init() {
    this.createDots();
    this.attachEventListeners();
    this.updateCarousel();
    this.startAutoPlay();
    
    window.addEventListener('resize', () => {
      const newItemsPerView = this.getItemsPerView();
      if (newItemsPerView !== this.itemsPerView) {
        this.itemsPerView = newItemsPerView;
        this.currentIndex = 0;
        this.createDots();
        this.updateCarousel();
      }
    });
  }

  createDots() {
    const totalDots = Math.ceil(this.items.length / this.itemsPerView);
    this.dotsContainer.innerHTML = '';
    for (let i = 0; i < totalDots; i++) {
      const dot = document.createElement('button');
      dot.classList.add('carousel-dot');
      if (i === 0) dot.classList.add('active');
      dot.setAttribute('aria-label', `Ir para slide ${i + 1}`);
      dot.addEventListener('click', () => this.goToSlide(i));
      this.dotsContainer.appendChild(dot);
    }
  }

  attachEventListeners() {
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.prev());
    }
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.next());
    }
  }

  updateCarousel() {
    // Calcular deslocamento em pixels (cada item + gap)
    const itemWidth = 160; // largura do item
    const gap = 16; // 1rem = 16px
    const itemTotalWidth = itemWidth + gap;
    const offset = -this.currentIndex * itemTotalWidth * this.itemsPerView;
    
    this.carousel.style.transform = `translateX(${offset}px)`;

    // Update dots
    const dots = this.dotsContainer.querySelectorAll('.carousel-dot');
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === this.currentIndex);
    });
  }

  next() {
    const maxIndex = Math.ceil(this.items.length / this.itemsPerView) - 1;
    this.currentIndex = (this.currentIndex + 1) % (maxIndex + 1);
    this.updateCarousel();
    this.resetAutoPlay();
  }

  prev() {
    const maxIndex = Math.ceil(this.items.length / this.itemsPerView) - 1;
    this.currentIndex = this.currentIndex === 0 ? maxIndex : this.currentIndex - 1;
    this.updateCarousel();
    this.resetAutoPlay();
  }

  goToSlide(index) {
    this.currentIndex = index;
    this.updateCarousel();
    this.resetAutoPlay();
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.next();
    }, 5000); // Muda a cada 5 segundos
  }

  resetAutoPlay() {
    clearInterval(this.autoPlayInterval);
    this.startAutoPlay();
  }

  destroy() {
    clearInterval(this.autoPlayInterval);
  }
}

// Inicializa o carrossel quando o DOM está pronto
document.addEventListener('DOMContentLoaded', () => {
  new PartnersCarousel();
});
