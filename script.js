document.getElementById('openModal').addEventListener('click', function() {
  document.getElementById('myModal').classList.add('open');
});

document.getElementById('closeBtn').addEventListener('click', function() {
  document.getElementById('myModal').classList.remove('open');
});
