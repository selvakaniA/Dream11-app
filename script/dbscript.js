// Menu Icon Toggle (for sidebar - optional future feature)
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    menuIcon.addEventListener('click', () => {
      alert('Menu button clicked - Sidebar toggle can be added here.');
      // You can implement sidebar toggle logic here
    });
  
    // Sign Up and Log In Button Alerts
    const signUpBtn = document.querySelector('.signup-button');
    const loginBtn = document.querySelector('.login-button');
  
    signUpBtn.addEventListener('click', () => {
      console.log("Redirecting to signup...");
      // Add any logic before redirecting
    });
    loginBtn.addEventListener('click', () => {
        console.log("Redirecting to login...");
        // Add any logic before redirecting
      });
    // Language Change Handler
    const languageSelect = document.querySelector('select');
    languageSelect.addEventListener('change', (event) => {
      alert(`Language changed to: ${event.target.value}`);
      // You can implement dynamic language change here if needed
    });
  });
  
