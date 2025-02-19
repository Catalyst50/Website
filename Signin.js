// JavaScript to handle the toggling between Sign In and Sign Up
const container = document.getElementById('container');
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');

// Add 'right-panel-active' class to switch to Sign Up
signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

// Remove 'right-panel-active' class to switch to Sign In
signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});
