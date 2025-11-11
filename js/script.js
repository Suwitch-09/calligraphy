document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navBar = document.getElementById('navBar');
    
    if (menuToggle && navBar) {
        menuToggle.addEventListener('click', function() {
            navBar.classList.toggle('nav-active');
            
            // 动画汉堡菜单图标
            const bars = document.querySelectorAll('.menu-toggle .bar');
            if (navBar.classList.contains('nav-active')) {
                bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                bars.forEach(bar => {
                    bar.style.transform = '';
                    bar.style.opacity = '';
                });
            }
        });
    }
    
    // 点击导航链接后关闭菜单（手机端）
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 767) {
                navBar.classList.remove('nav-active');
                const bars = document.querySelectorAll('.menu-toggle .bar');
                bars.forEach(bar => {
                    bar.style.transform = '';
                    bar.style.opacity = '';
                });
            }
        });
    });
});