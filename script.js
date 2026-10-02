// Modal Auth
const authModal = document.getElementById('authModal');
const loginBtn = document.getElementById('loginBtn');
const closeBtn = document.querySelector('.close-btn');
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

// Open Auth Modal
loginBtn.addEventListener('click', () => {
  authModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
});

// Close Modal
closeBtn.addEventListener('click', closeModal);
authModal.addEventListener('click', (e) => {
  if (e.target === authModal) closeModal();
});

function closeModal() {
  authModal.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

// Tab Switching
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const tabName = btn.getAttribute('data-tab');
    
    tabBtns.forEach(b => b.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));
    
    btn.classList.add('active');
    document.getElementById(tabName).classList.add('active');
  });
});

// Form Submission
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Terima kasih! Tim kami akan menghubungi Anda segera.');
    closeModal();
    form.reset();
  });
});

// Profile Modal
const profileModal = document.getElementById('profileModal');
const profileCloseBtn = profileModal.querySelector('.close-btn');

profileCloseBtn.addEventListener('click', () => {
  profileModal.classList.add('hidden');
  document.body.style.overflow = 'auto';
});

profileModal.addEventListener('click', (e) => {
  if (e.target === profileModal) {
    profileModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
});

// Profile Card Info Button
const infoButtons = document.querySelectorAll('.info-btn');
infoButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    profileModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  });
});

// Like/Dislike Actions with Animation
const likeButtons = document.querySelectorAll('.like-btn');
const dislikeButtons = document.querySelectorAll('.dislike-btn');

likeButtons.forEach(btn => {
  btn.addEventListener('click', function(e) {
    const card = this.closest('.person-card');
    card.classList.add('liked');
    setTimeout(() => {
      card.style.transform = 'translateX(150%) rotateZ(20deg)';
      card.style.opacity = '0';
    }, 100);
    
    setTimeout(() => {
      const message = document.createElement('div');
      message.className = 'toast-message';
      message.textContent = '❤️ Match berhasil ditambahkan!';
      document.body.appendChild(message);
      
      setTimeout(() => message.remove(), 3000);
    }, 300);
  });
});

dislikeButtons.forEach(btn => {
  btn.addEventListener('click', function(e) {
    const card = this.closest('.person-card');
    card.style.transform = 'translateX(-150%) rotateZ(-20deg)';
    card.style.opacity = '0';
    
    setTimeout(() => {
      const message = document.createElement('div');
      message.className = 'toast-message skip';
      message.textContent = '👋 Profil dilewati';
      document.body.appendChild(message);
      
      setTimeout(() => message.remove(), 3000);
    }, 300);
  });
});

// Sport Filter
const sportFilter = document.getElementById('sportFilter');
const personCards = document.querySelectorAll('.person-card');

sportFilter.addEventListener('change', (e) => {
  const selectedSport = e.target.value;
  
  personCards.forEach(card => {
    if (selectedSport === '' || card.getAttribute('data-sport') === selectedSport) {
      card.style.display = 'block';
      setTimeout(() => card.classList.add('show'), 10);
    } else {
      card.classList.remove('show');
      setTimeout(() => card.style.display = 'none', 300);
    }
  });
});

// Start Match Button
const startMatchBtn = document.getElementById('startMatchBtn');
startMatchBtn.addEventListener('click', () => {
  document.querySelector('#matches').scrollIntoView({ behavior: 'smooth' });
});

// Join Event Buttons
const joinButtons = document.querySelectorAll('.event-card .btn');
joinButtons.forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const eventCard = this.closest('.event-card');
    const eventName = eventCard.querySelector('h3').textContent;
    
    this.textContent = '✓ Sudah Join';
    this.disabled = true;
    this.classList.add('joined');
    
    const message = document.createElement('div');
    message.className = 'toast-message';
    message.textContent = `✓ Kamu sudah join "${eventName}"`;
    document.body.appendChild(message);
    
    setTimeout(() => message.remove(), 3000);
  });
});

// Connect Button in Profile Modal
const connectButtons = document.querySelectorAll('.profile-actions .btn-primary');
connectButtons.forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    
    const message = document.createElement('div');
    message.className = 'toast-message';
    message.textContent = '💬 Permintaan connect terkirim!';
    document.body.appendChild(message);
    
    setTimeout(() => {
      profileModal.classList.add('hidden');
      document.body.style.overflow = 'auto';
      message.remove();
    }, 2000);
  });
});

// Join Button di CTA
const joinBtn = document.getElementById('joinBtn');
joinBtn.addEventListener('click', () => {
  authModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  
  // Switch to signup tab
  document.querySelector('[data-tab="signup"]').click();
});

// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Add some animations on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, observerOptions);

document.querySelectorAll('.feature-card, .event-card, .testimonial-card, .person-card').forEach(card => {
  observer.observe(card);
});

// Random online status simulation
setInterval(() => {
  const onlineIndicators = document.querySelectorAll('.online');
  onlineIndicators.forEach(indicator => {
    const shouldBeOnline = Math.random() > 0.3;
    if (shouldBeOnline) {
      indicator.style.background = '#22c55e';
    } else {
      indicator.style.background = '#d1d5db';
    }
  });
}, 5000);

// Connect button feedback
document.querySelectorAll('.person-card .btn-primary').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const originalText = this.textContent;
    this.textContent = '✓ Terkirim';
    this.disabled = true;
    
    const message = document.createElement('div');
    message.className = 'toast-message';
    message.textContent = '💬 Permintaan connect terkirim!';
    document.body.appendChild(message);
    
    setTimeout(() => message.remove(), 3000);
  });
});
