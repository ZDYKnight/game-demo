document.addEventListener('DOMContentLoaded', () => {
    // Copy buttons
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const code = btn.previousElementSibling.querySelector('code').textContent;
            navigator.clipboard.writeText(code.trim());
            btn.textContent = 'Copied!';
            btn.classList.add('copied');
            setTimeout(() => {
                btn.textContent = 'Copy';
                btn.classList.remove('copied');
            }, 2000);
        });
    });

    // Sidebar
    const sidebar = document.getElementById('outlineSidebar');
    const openBtn = document.getElementById('openSidebarBtn');
    const closeBtn = document.querySelector('.closebtn');
    const overlay = document.getElementById('overlay');

    openBtn.onclick = () => {
        sidebar.classList.add('open');
        overlay.classList.add('active');
    };

    closeBtn.onclick = overlay.onclick = () => {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
    };

    // Active link on scroll
    const sections = document.querySelectorAll('.pipeline-section');
    const links = document.querySelectorAll('.sidebar-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(sec => {
            if (window.scrollY >= sec.offsetTop - 200) {
                current = sec.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
        });
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                sidebar.classList.remove('open');
                overlay.classList.remove('active');
            }
        });
    });
});