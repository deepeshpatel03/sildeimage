const panels = document.querySelectorAll('.panel');
let currentIndex = 0; // Start with the first panel

// Function to remove the 'active' class from all panels
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}

// Function to switch to the next panel
function switchToNextPanel() {
    removeActiveClasses(); // Remove 'active' class from all panels

    panels[currentIndex].classList.add('active'); // Add 'active' class to the current panel

    currentIndex++; // Move to the next panel

    // If the currentIndex exceeds the number of panels, reset it to 0 (loop back to the first panel)
    if (currentIndex >= panels.length) {
        currentIndex = 0;
    }
}

// Set an interval to switch panels every 3 seconds (3000 milliseconds)
setInterval(switchToNextPanel, 4000);