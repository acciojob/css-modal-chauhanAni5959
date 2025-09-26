const openBtn = document.getElementById('openModal');
    const modal = document.getElementById('myModal');
    const closeBtn = document.getElementById('closeBtn');
    
    openBtn.onclick = () => {
      modal.classList.add('open');
    };
    closeBtn.onclick = () => {
      modal.classList.remove('open');
    };
    window.onclick = (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
      }
    };