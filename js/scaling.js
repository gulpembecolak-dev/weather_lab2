/**
 * Scaling System for Weather Lab Kids
 * Simulates Phaser's FIT mode for iPad Mini and other tablets.
 */

const Scaling = {
    targetWidth: 1024,
    targetHeight: 768,
    
    init() {
        window.addEventListener('resize', () => this.resize());
        this.resize();
    },
    
    resize() {
        const container = document.querySelector('.screen-container');
        if (!container) return;
        
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        
        const scaleX = windowWidth / this.targetWidth;
        const scaleY = windowHeight / this.targetHeight;
        
        // Choose the smallest scale to fit within the screen
        const scale = Math.min(scaleX, scaleY);
        
        container.style.transform = `scale(${scale})`;
        container.style.position = 'absolute';
        container.style.top = '50%';
        container.style.left = '50%';
        container.style.marginTop = `-${(this.targetHeight * scale) / 2}px`;
        container.style.marginLeft = `-${(this.targetWidth * scale) / 2}px`;
    }
};

Scaling.init();
