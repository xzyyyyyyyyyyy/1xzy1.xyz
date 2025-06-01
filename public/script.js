const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Function to set theme based on preference
function setTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.textContent = '切换浅色模式';
    } else {
        body.classList.remove('dark-mode');
        themeToggle.textContent = '切换深色模式';
    }
}

// Check for saved theme preference in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setTheme(savedTheme);
} else {
    // Optional: Check system preference if no saved theme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
}


// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    const isDarkMode = body.classList.contains('dark-mode');
    const newTheme = isDarkMode ? 'light' : 'dark';
    setTheme(newTheme);
    // Save the new theme preference
    localStorage.setItem('theme', newTheme);
});

// Optional: Listen for changes in system preference
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    // Only change if no theme is manually set OR if you want it to always follow system
     if (!localStorage.getItem('theme')) {
        setTheme(event.matches ? 'dark' : 'light');
     }
});