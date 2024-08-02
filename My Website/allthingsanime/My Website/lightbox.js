document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const src = this.getAttribute('href');
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `<div class="lightbox-content"><img src="${src}" alt="Large view"><span class="close">&times;</span></div>`;
            document.body.appendChild(lightbox);
            document.querySelector('.close').addEventListener('click', function() {
                document.body.removeChild(lightbox);
            });
        });
    });
});
