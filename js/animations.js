/**
 * SHIOYA BURGER - Advanced Animations JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
    initHeroSlideshow();
    initParticles();
    initLightbox();
    initImageManager();
    initTiltEffect();
    initParallax();
});

/**
 * Hero Background Slideshow
 * 自動で背景画像を切り替える
 */
function initHeroSlideshow() {
    const slides = document.querySelectorAll('.hero-slideshow .slide');
    const indicators = document.querySelectorAll('.slide-indicators .indicator');

    if (slides.length === 0) return;

    let currentSlide = 0;
    const slideInterval = 5000; // 5秒ごとに切り替え

    function showSlide(index) {
        // 全てのスライドを非アクティブに
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(ind => ind.classList.remove('active'));

        // 指定のスライドをアクティブに
        slides[index].classList.add('active');
        indicators[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        const next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }

    // 自動切り替え
    let autoSlide = setInterval(nextSlide, slideInterval);

    // インジケータークリックでスライド切り替え
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            clearInterval(autoSlide);
            showSlide(index);
            autoSlide = setInterval(nextSlide, slideInterval);
        });
    });

    // ホバー時に自動切り替えを一時停止
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.addEventListener('mouseenter', () => clearInterval(autoSlide));
        hero.addEventListener('mouseleave', () => {
            autoSlide = setInterval(nextSlide, slideInterval);
        });
    }
}

/**
 * Particle Effects
 * 画面に漂うパーティクルエフェクト
 */
function initParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return;

    const particleCount = 20;
    const colors = ['#F4A460', '#D4A574', '#8B4513', '#FFD700'];

    for (let i = 0; i < particleCount; i++) {
        createParticle(container, colors);
    }
}

function createParticle(container, colors) {
    const particle = document.createElement('div');
    particle.className = 'particle';

    // ランダムな初期位置
    particle.style.left = Math.random() * 100 + '%';
    particle.style.bottom = '-20px';

    // ランダムなサイズ
    const size = Math.random() * 8 + 4;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';

    // ランダムな色
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];

    // ランダムなアニメーション時間
    const duration = Math.random() * 10 + 10;
    particle.style.animationDuration = duration + 's';
    particle.style.animationDelay = Math.random() * 5 + 's';

    container.appendChild(particle);

    // アニメーション終了後に再生成
    particle.addEventListener('animationend', () => {
        particle.remove();
        createParticle(container, colors);
    });
}

/**
 * Lightbox Gallery
 * 画像をクリックで拡大表示
 */
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = lightbox?.querySelector('.lightbox-image');
    const lightboxCaption = lightbox?.querySelector('.lightbox-caption');
    const closeBtn = lightbox?.querySelector('.lightbox-close');
    const prevBtn = lightbox?.querySelector('.lightbox-prev');
    const nextBtn = lightbox?.querySelector('.lightbox-next');

    if (!lightbox) return;

    const galleryItems = document.querySelectorAll('[data-lightbox]');
    let currentIndex = 0;
    const images = [];

    // 画像情報を収集
    galleryItems.forEach((item, index) => {
        const img = item.querySelector('img');
        if (img) {
            images.push({
                src: img.src,
                alt: img.alt
            });

            item.addEventListener('click', () => {
                openLightbox(index);
            });
        }
    });

    function openLightbox(index) {
        currentIndex = index;
        updateLightbox();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    function updateLightbox() {
        lightboxImage.src = images[currentIndex].src;
        lightboxImage.alt = images[currentIndex].alt;
        lightboxCaption.textContent = images[currentIndex].alt;
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateLightbox();
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateLightbox();
    }

    // イベントリスナー
    closeBtn?.addEventListener('click', closeLightbox);
    nextBtn?.addEventListener('click', nextImage);
    prevBtn?.addEventListener('click', prevImage);

    // 背景クリックで閉じる
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    // キーボード操作
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;

        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
    });
}

/**
 * Image Manager
 * 画像のアップロードと管理パネル
 */
function initImageManager() {
    const manager = document.getElementById('image-manager');
    const toggleBtn = document.getElementById('image-manager-toggle');
    const closeBtn = manager?.querySelector('.image-manager-close');
    const dropzone = document.getElementById('dropzone');
    const fileInput = document.getElementById('image-upload');
    const imageList = document.getElementById('image-list');

    if (!manager || !toggleBtn) return;

    // 保存された画像を読み込み
    let savedImages = JSON.parse(localStorage.getItem('lpImages') || '[]');
    renderImageList();

    // パネル開閉
    toggleBtn.addEventListener('click', () => {
        manager.classList.toggle('hidden');
    });

    closeBtn?.addEventListener('click', () => {
        manager.classList.add('hidden');
    });

    // ドラッグ&ドロップ
    dropzone?.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropzone.classList.add('dragover');
    });

    dropzone?.addEventListener('dragleave', () => {
        dropzone.classList.remove('dragover');
    });

    dropzone?.addEventListener('drop', (e) => {
        e.preventDefault();
        dropzone.classList.remove('dragover');
        handleFiles(e.dataTransfer.files);
    });

    // ファイル選択
    fileInput?.addEventListener('change', (e) => {
        handleFiles(e.target.files);
    });

    function handleFiles(files) {
        Array.from(files).forEach(file => {
            if (!file.type.startsWith('image/')) return;

            const reader = new FileReader();
            reader.onload = (e) => {
                const imageData = {
                    id: Date.now() + Math.random(),
                    src: e.target.result,
                    name: file.name
                };
                savedImages.push(imageData);
                localStorage.setItem('lpImages', JSON.stringify(savedImages));
                renderImageList();
            };
            reader.readAsDataURL(file);
        });
    }

    function renderImageList() {
        if (!imageList) return;

        imageList.innerHTML = savedImages.map(img => `
            <div class="image-list-item" data-src="${img.src}" data-id="${img.id}">
                <img src="${img.src}" alt="${img.name}">
            </div>
        `).join('');

        // 画像クリックでURLをコピー
        imageList.querySelectorAll('.image-list-item').forEach(item => {
            item.addEventListener('click', () => {
                const src = item.dataset.src;
                navigator.clipboard.writeText(src).then(() => {
                    showToast('画像URLをコピーしました');
                });
            });

            // 右クリックで削除
            item.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                if (confirm('この画像を削除しますか？')) {
                    const id = parseFloat(item.dataset.id);
                    savedImages = savedImages.filter(img => img.id !== id);
                    localStorage.setItem('lpImages', JSON.stringify(savedImages));
                    renderImageList();
                }
            });
        });
    }
}

/**
 * Toast Notification
 */
function showToast(message) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: #333;
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        z-index: 3000;
        animation: slideUp 0.3s ease;
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideUp 0.3s ease reverse';
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

/**
 * 3D Tilt Effect
 * カードにマウスを乗せると傾く
 */
function initTiltEffect() {
    const cards = document.querySelectorAll('[data-tilt]');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
}

/**
 * Parallax Effect
 * スクロールに応じた視差効果
 */
function initParallax() {
    const hero = document.querySelector('.hero');
    const shapes = document.querySelectorAll('.shape');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        // ヒーローセクションの視差
        if (hero) {
            const heroContent = hero.querySelector('.hero-content');
            if (heroContent && scrollY < window.innerHeight) {
                heroContent.style.transform = `translateY(${scrollY * 0.3}px)`;
                heroContent.style.opacity = 1 - (scrollY / window.innerHeight);
            }
        }

        // 浮遊シェイプの視差
        shapes.forEach((shape, index) => {
            const speed = 0.05 + (index * 0.02);
            shape.style.transform = `translateY(${scrollY * speed}px)`;
        });
    });
}

/**
 * Smooth Counter Animation
 * 数字のカウントアップアニメーション
 */
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(start + (target - start) * easeOutQuart);

        element.textContent = current.toLocaleString();

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

/**
 * Typed Text Effect
 * タイピングエフェクト
 */
function typeText(element, text, speed = 50) {
    element.textContent = '';
    let index = 0;

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }

    type();
}

/**
 * Magnetic Button Effect
 * マウスに引き寄せられるボタン効果
 */
function initMagneticButtons() {
    const buttons = document.querySelectorAll('.magnetic-btn');

    buttons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
        });
    });
}

/**
 * Cursor Trail Effect
 * カーソルの軌跡エフェクト
 */
function initCursorTrail() {
    const trail = [];
    const trailLength = 10;

    for (let i = 0; i < trailLength; i++) {
        const dot = document.createElement('div');
        dot.style.cssText = `
            position: fixed;
            width: ${10 - i}px;
            height: ${10 - i}px;
            background: rgba(244, 164, 96, ${1 - i / trailLength});
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease;
        `;
        document.body.appendChild(dot);
        trail.push(dot);
    }

    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {
        let x = mouseX;
        let y = mouseY;

        trail.forEach((dot, index) => {
            const nextDot = trail[index + 1] || trail[0];

            dot.style.left = x + 'px';
            dot.style.top = y + 'px';

            x += (parseFloat(nextDot.style.left) - x) * 0.3;
            y += (parseFloat(nextDot.style.top) - y) * 0.3;
        });

        requestAnimationFrame(animate);
    }

    // animate(); // 必要に応じてコメント解除
}

// Export functions for external use
window.LPAnimations = {
    animateCounter,
    typeText,
    showToast,
    initCursorTrail
};
