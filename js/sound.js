/**
 * Audio System for Weather Lab Kids
 * Handles sound effects like blips and ambient sounds.
 */

const SoundSystem = {
    audioContext: null,
    
    init() {
        // Initialize audio context on first user interaction
        document.addEventListener('click', () => {
            if (!this.audioContext) {
                this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            }
        }, { once: true });
    },
    
    playBlip(frequency = 880, duration = 0.1) {
        if (!this.audioContext) return;
        
        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        
        osc.type = 'square'; // Pixel art style sound
        osc.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
        osc.frequency.exponentialRampToValueAtTime(frequency / 2, this.audioContext.currentTime + duration);
        
        gain.gain.setValueAtTime(0.1, this.audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);
        
        osc.connect(gain);
        gain.connect(this.audioContext.destination);
        
        osc.start();
        osc.stop(this.audioContext.currentTime + duration);
    },
    
    playWind() {
        // Placeholder for ambient wind sound
        // In a real app, this would load a 'wind.mp3' file
        console.log('[Sound] Playing ambient wind sound...');
    }
};

// Initialize
SoundSystem.init();

// Hook into clicks for global blip sound
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON' || e.target.classList.contains('interactive-object')) {
        SoundSystem.playBlip(660, 0.05);
    }
});
