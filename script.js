document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menuicon');
    const navMenu = document.querySelector('.navmenu');
  
    menuIcon.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  });

 