const openModalBtn = document.getElementById('openModal');
const modal = document.getElementById('myModal');
const closeBtn = document.getElementById('closeBtn');

// Open modal
openModalBtn.addEventListener('click', () => {
  modal.classList.add('open');
});

// Close modal when clicking the close button
closeBtn.addEventListener('click', () => {
  modal.classList.remove('open');
});

// Close modal when clicking outside modal-content (on backdrop)
modal.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.classList.remove('open');
  }
});
