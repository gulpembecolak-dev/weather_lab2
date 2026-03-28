/**
 * Analytics and Logging System for Weather Lab Kids
 * Tracks user interactions and session data for usability testing.
 */

const Analytics = {
    startTime: null,
    currentScreen: '',
    
    init(screenName) {
        this.startTime = Date.now();
        this.currentScreen = screenName;
        
        // Log screen visit
        this.logEvent('screen_view', { screen: screenName });
        
        // Track clicks on important elements
        document.addEventListener('click', (e) => {
            const target = e.target;
            if (target.onclick || target.tagName === 'BUTTON' || target.classList.contains('interactive-object')) {
                this.logEvent('click', {
                    screen: this.currentScreen,
                    element: target.innerText || target.className || 'unnamed_element',
                    id: target.id
                });
            }
        });
        
        // Handle page unload to track duration
        window.addEventListener('beforeunload', () => {
            const duration = Math.round((Date.now() - this.startTime) / 1000);
            this.logEvent('screen_duration', {
                screen: this.currentScreen,
                duration_seconds: duration
            });
        });
    },
    
    logEvent(eventName, data) {
        const logs = JSON.parse(localStorage.getItem('weather_lab_logs') || '[]');
        const logEntry = {
            timestamp: new Date().toISOString(),
            event: eventName,
            ...data
        };
        logs.push(logEntry);
        localStorage.setItem('weather_lab_logs', JSON.stringify(logs));
        
        // Also log to console for developers
        console.log(`[Analytics] ${eventName}:`, data);
    },
    
    // Hidden function to download logs (can be called from console)
    downloadLogs() {
        const logs = localStorage.getItem('weather_lab_logs');
        const blob = new Blob([logs], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `weather_lab_test_logs_${new Date().getTime()}.json`;
        a.click();
    },
    
    clearLogs() {
        localStorage.removeItem('weather_lab_logs');
        console.log('[Analytics] Logs cleared.');
    }
};

// Auto-initialize if screen name is provided via script attribute or global variable
if (window.SCREEN_NAME) {
    Analytics.init(window.SCREEN_NAME);
}
