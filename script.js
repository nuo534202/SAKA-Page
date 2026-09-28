const bib = document.querySelector('#bibCode').textContent;
const copyButton = document.querySelector('#copyBib');
const copyStatus = document.querySelector('.copy-status');
copyButton.addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(bib); copyStatus.textContent = 'Copied to clipboard.'; copyButton.textContent = 'COPIED'; }
  catch { copyStatus.textContent = 'Select the citation text to copy.'; }
  setTimeout(() => { copyStatus.textContent = ''; copyButton.textContent = 'COPY'; }, 2400);
});
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), {threshold: .08});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
const lightbox = document.querySelector('#lightbox');
const zoomButton = document.querySelector('.zoomable');
const lightboxImage = lightbox.querySelector('img');
zoomButton.addEventListener('click', () => { lightboxImage.src = zoomButton.querySelector('img').src; lightboxImage.alt = zoomButton.querySelector('img').alt; lightbox.showModal(); });
lightbox.querySelector('.close-lightbox').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });
