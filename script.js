document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
                .scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener("DOMContentLoaded", async () => {
  const includes = document.querySelectorAll("[data-include]");

  await Promise.all(
    Array.from(includes).map(async el => {
      const file = el.getAttribute("data-include");
      const res = await fetch(file);
      el.innerHTML = await res.text();
    })
  );

  document.body.classList.remove("preload");
});

// RESUME SCRIPT

const openBtn = document.getElementById('openResumeBtn');
const modal = document.getElementById('resumeModal');
const closeBtn = document.getElementById('closeModal');

openBtn.addEventListener('click', () => {
    modal.classList.add('show'); 
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('show'); 
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
})