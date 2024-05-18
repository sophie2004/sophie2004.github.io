document.querySelectorAll('.tab-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.tab-link').forEach(link => link.classList.remove('active'));
        document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));

        link.classList.add('active');
        const target = document.querySelector(link.getAttribute('href'));
        target.classList.add('active');
    });
});
