const openModalBtn = document.getElementById('openModal');
const modal = document.getElementById('myModal');
const closeBtn = document.getElementById('closeBtn');

// Open the modal
openModalBtn.addEventListener('click', function() {
  modal.classList.add('open');
});

// Close when clicking the X
closeBtn.addEventListener('click', function() {
  modal.classList.remove('open');
});

// Close when clicking outside the modal-content
modal.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.classList.remove('open');
  }
});
