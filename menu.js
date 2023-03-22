window.addEventListener('load', () => {
  const menuBtn = document.getElementById('menu-btn');
  const menuSection = document.querySelector('.menu-section');
  const closeButton = document.getElementById('close-btn');
  const menuItems = document.getElementsByClassName('menu-item');

  for (let i = 0; i < menuItems.length; i += 1) {
    menuItems[i].addEventListener('click', () => {
      menuSection.classList.remove('visible');
    });
  }

  menuBtn.addEventListener('click', () => {
    menuSection.classList.add('visible');
  });

  closeButton.addEventListener('click', () => {
    menuSection.classList.remove('visible');
  });
});
