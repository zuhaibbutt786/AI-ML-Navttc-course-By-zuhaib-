// Reading progress bar
window.addEventListener('scroll', () => {
  const fill = document.querySelector('.progress-fill');
  if (!fill) return;
  const h = document.documentElement;
  const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
  fill.style.width = scrolled + '%';
});

// Simple MCQ self-check: clicking an option reveals correctness
document.addEventListener('click', (e) => {
  const opt = e.target.closest('.mcq-opt');
  if (!opt) return;
  const block = opt.closest('.mcq');
  block.querySelectorAll('.mcq-opt').forEach(o => o.classList.remove('correct','wrong'));
  if (opt.dataset.correct === 'true') {
    opt.classList.add('correct');
  } else {
    opt.classList.add('wrong');
    const correctEl = block.querySelector('[data-correct="true"]');
    if (correctEl) correctEl.classList.add('correct');
  }
});
