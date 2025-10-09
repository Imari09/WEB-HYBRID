// Функции для мобильного меню
function toggleMobileMenu() {
    const sidebar = document.getElementById('mobileSidebar');
    const overlay = document.getElementById('overlay');
    sidebar.classList.toggle('open');
    overlay.classList.toggle('open');
}

function closeMobileMenu() {
    const sidebar = document.getElementById('mobileSidebar');
    const overlay = document.getElementById('overlay');
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
}

function toggleSubmenu(submenuId) {
    const submenu = document.getElementById(submenuId);
    submenu.classList.toggle('open');
}

// Закрытие меню при клике на ссылку
document.querySelectorAll('.mobile-sidebar a[href]').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.getAttribute('href') !== 'javascript:void(0)') {
            closeMobileMenu();
        }
    });
});