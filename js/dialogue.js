/**
 * Dialogue System for Weather Lab Kids
 * Handles showing Pam's dialogues with emotions and typewriter effect.
 */

const DialogueSystem = {
    container: null,
    portrait: null,
    textElement: null,
    typewriterInterval: null,
    isTyping: false,
    
    init() {
        // Create dialogue elements if they don't exist
        if (!document.querySelector('.dialogue-container')) {
            const container = document.createElement('div');
            container.className = 'dialogue-container';
            container.innerHTML = `
                <div class="pam-portrait normal"></div>
                <div class="dialogue-box">
                    <div class="dialogue-text"></div>
                    <div class="dialogue-next-hint">▼</div>
                </div>
            `;
            document.querySelector('.screen-container').appendChild(container);
        }
        
        this.container = document.querySelector('.dialogue-container');
        this.portrait = document.querySelector('.pam-portrait');
        this.textElement = document.querySelector('.dialogue-text');
        
        // Add click listener to container to close dialogue
        this.container.addEventListener('click', () => {
            if (this.isTyping) {
                // If still typing, skip to the end of the text
                this.finishTyping();
            } else {
                this.hide();
            }
        });
    },
    
    show(text, emotion = 'normal') {
        if (!this.container) this.init();
        
        // Reset state
        this.hide();
        this.isTyping = true;
        
        // Set emotion
        this.portrait.className = `pam-portrait ${emotion}`;
        
        // Show container
        this.container.classList.add('visible');
        
        // Typewriter effect
        let index = 0;
        this.textElement.innerHTML = '';
        
        this.typewriterInterval = setInterval(() => {
            if (index < text.length) {
                this.textElement.innerHTML += text[index];
                index++;
                // Add blip sound here if possible
                this.playBlip();
            } else {
                this.finishTyping();
            }
        }, 50);
        
        // Store full text for quick skipping
        this.fullText = text;
    },
    
    finishTyping() {
        clearInterval(this.typewriterInterval);
        this.textElement.innerHTML = this.fullText;
        this.isTyping = false;
    },
    
    hide() {
        if (this.container) {
            this.container.classList.remove('visible');
            clearInterval(this.typewriterInterval);
            this.isTyping = false;
        }
    },
    
    playBlip() {
        // Placeholder for sound effect
        // If sound system is implemented, trigger a blip sound
    }
};

// Global helper function for easier calling
function showDialogue(text, emotion) {
    DialogueSystem.show(text, emotion);
}
