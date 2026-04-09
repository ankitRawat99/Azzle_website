// header js 

function initHeader() {
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
}

function toggleSubMenu(id) {
  const submenu = document.getElementById(id);
  submenu.classList.toggle('hidden');
}

// service page js(accordion effect)


      document.querySelectorAll('.accordion-title').forEach((title) => {
    title.addEventListener('click', () => {
      const content = title.nextElementSibling;
      const icon = title.querySelector('.icon');
  
      // Toggle content visibility and icon rotation
      content.classList.toggle('hidden');
      icon.classList.toggle('rotate-45');
    });
  });
    
  


