 // password visibility toggle
 const toggleButton = document.getElementById('password-visibility-toggle');
 const passwordInput = document.getElementById('password-input');
 const icon = document.getElementById('password-visibility-icon');

 if (toggleButton && passwordInput && icon) {
     toggleButton.addEventListener('click', () => {
         const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
         passwordInput.setAttribute('type', type);
        
         icon.textContent = type === 'password' ? '👁️' : '👁️‍🗨️'; 
     });
 }