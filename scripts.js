document.addEventListener('DOMContentLoaded', () => {
    // Cherry Blossom Effect
    for (let i = 0; i < 50; i++) {
        let cherryBlossom = document.createElement('div');
        cherryBlossom.classList.add('cherry-blossom');
        document.body.appendChild(cherryBlossom);
        cherryBlossom.style.left = Math.random() * 100 + 'vw';
        cherryBlossom.style.animationDelay = Math.random() * 5 + 's';
    }

    // Pink Special Effect on Click
    document.querySelectorAll('.widget').forEach(widget => {
        widget.addEventListener('click', () => {
            widget.style.backgroundColor = 'rgba(255, 105, 180, 0.5)';
            setTimeout(() => {
                widget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }, 300);
        });
    });
});
