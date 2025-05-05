// Back to Top Button Logic
const backToTopButton = document.getElementById('back-to-top');

// Show or hide the button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Show button after scrolling 300px
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Scroll back to the top when the button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling effect
    });
});

// Get references to the "New" button and the form
const newButton = document.getElementById('new');
const preferenceForm = document.querySelector('.preference.form');

// Smoothly show or hide the form
newButton.addEventListener('click', () => {
    if (preferenceForm.style.display === 'none' || preferenceForm.style.display === '') {
        preferenceForm.style.opacity = '0'; // Start with opacity 0
        preferenceForm.style.display = 'block'; // Show the form
        setTimeout(() => {
            preferenceForm.style.opacity = '1'; // Fade in
        }, 10); // Small delay to ensure the transition works
    } else {
        preferenceForm.style.opacity = '0'; // Fade out
        setTimeout(() => {
            preferenceForm.style.display = 'none'; // Hide the form after fade-out
        }, 300); // Match the CSS transition duration
    }
});

// Get references to the form and its elements
const preferenceFormElement = document.getElementById('preference-form');

// Add a submit event listener to the form
preferenceFormElement.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Get the selected section and preference values
    const section = document.getElementById('section').value;
    const preference = document.getElementById('preference').value;

    // Get the section element by its ID
    const sectionElement = document.getElementById(section);

    // Apply the preference (show or hide)
    if (preference === 'show') {
        sectionElement.style.display = 'block'; // Show the section
    } else if (preference === 'hide') {
        sectionElement.style.display = 'none'; // Hide the section
    }

    // Save the preference to localStorage
    localStorage.setItem(section, preference);
});

// Smoothly apply preferences on page load
window.addEventListener('load', () => {
    const sections = ['image-grid', 'front-end-facts', 'content']; // List of section IDs

    sections.forEach((section) => {
        const preference = localStorage.getItem(section); // Get the stored preference
        const sectionElement = document.getElementById(section);

        if (sectionElement) {
            if (preference === 'show') {
                sectionElement.style.opacity = '0'; // Start with opacity 0
                sectionElement.style.display = 'block'; // Show the section
                setTimeout(() => {
                    sectionElement.style.opacity = '1'; // Fade in
                }, 10);
            } else if (preference === 'hide') {
                sectionElement.style.opacity = '1'; // Ensure it's visible
                setTimeout(() => {
                    sectionElement.style.opacity = '0'; // Fade out
                    setTimeout(() => {
                        sectionElement.style.display = 'none'; // Hide after fade-out
                    }, 300); // Match the CSS transition duration
                }, 10);
            }
        }
    });
});

// Get references to the "Retrieve" button and the form
const retrieveButton = document.getElementById('retrieve');

// Add a click event listener to the "Retrieve" button
retrieveButton.addEventListener('click', () => {
    // Hide the form
    preferenceForm.style.display = 'none';

    // Retrieve stored preferences from localStorage
    const sections = ['image-grid', 'front-end-facts', 'content']; // List of section IDs
    let preferencesOutput = 'Stored Preferences:\n';

    sections.forEach((section) => {
        const preference = localStorage.getItem(section); // Get the stored preference
        if (preference) {
            preferencesOutput += `${section}: ${preference}\n`; // Append to output
        }
    });

    // Display the stored preferences in an alert or console
    if (preferencesOutput.trim() === 'Stored Preferences:') {
        alert('No preferences stored yet.');
    } else {
        alert(preferencesOutput);
    }
});