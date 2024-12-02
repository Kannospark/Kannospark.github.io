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

document.addEventListener('DOMContentLoaded', () => {
    // 获取 canvas 元素
    const canvas = document.getElementById('fireworksCanvas');
    const ctx = canvas.getContext('2d');

    // 设置 canvas 的尺寸
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // 创建烟花爆炸效果
    function createFirework(x, y) {
        const particles = [];
        const colors = ['#ff6347', '#ff69b4', '#32cd32', '#4169e1', '#ff1493']; // 烟花颜色
        const numberOfParticles = 100;

        // 生成粒子
        for (let i = 0; i < numberOfParticles; i++) {
            particles.push({
                x: x,
                y: y,
                speed: Math.random() * 5 + 2,
                angle: Math.random() * Math.PI * 2,
                color: colors[Math.floor(Math.random() * colors.length)],
                radius: Math.random() * 3 + 1,
                life: Math.random() * 3 + 2, // 粒子的寿命
            });
        }

        // 动画：绘制烟花粒子
        function animateFirework() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach((particle, index) => {
                particle.x += Math.cos(particle.angle) * particle.speed;
                particle.y += Math.sin(particle.angle) * particle.speed;
                particle.life -= 0.02; // 粒子逐渐消失
                
                // 绘制粒子
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = particle.color;
                ctx.fill();
                
                // 删除生命周期结束的粒子
                if (particle.life <= 0) {
                    particles.splice(index, 1);
                }
            });

            // 如果有粒子仍然存在，继续动画
            if (particles.length > 0) {
                requestAnimationFrame(animateFirework);
            }
        }

        animateFirework();
    }

    // 添加点击事件监听
    document.querySelectorAll('.widget').forEach(widget => {
        widget.addEventListener('click', (e) => {
            // 获取点击位置的坐标
            const rect = e.target.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;

            // 创建烟花效果
            createFirework(x, y);
        });
    });
});

<div class="buttons-container">
    <button class="btn" id="return-btn" data-info="Go back to the previous page">Return</button>
    <button class="btn" id="home-btn" data-info="Go back to the home page">Home</button>
    <button class="btn" id="info-btn" data-info="Learn more about our project">Information</button>
    <button class="btn" id="major-btn" data-info="Explore the main subjects">Major</button>
    <button class="btn" id="interest-btn" data-info="Discover things that inspire us">Interest</button>
    <button class="btn" id="contact-btn" data-info="Get in touch with us">Contact</button>
</div>

