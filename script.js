    const lengthSlider = document.getElementById('length');
    const lengthValue = document.getElementById('lengthValue');
    const passwordBox = document.getElementById('password');

    lengthSlider.addEventListener('input', () => {
      lengthValue.textContent = lengthSlider.value;
    });

    function generatePassword() {
      const length = +lengthSlider.value;
      const hasUpper = document.getElementById('uppercase').checked;
      const hasLower = document.getElementById('lowercase').checked;
      const hasNumbers = document.getElementById('numbers').checked;
      const hasSymbols = document.getElementById('symbols').checked;

      const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const lower = 'abcdefghijklmnopqrstuvwxyz';
      const numbers = '0123456789';
      const symbols = '!@#$%^&*()_+-={}[]<>?';

      let chars = '';
      if (hasUpper) chars += upper;
      if (hasLower) chars += lower;
      if (hasNumbers) chars += numbers;
      if (hasSymbols) chars += symbols;

      if (!chars) {
        passwordBox.textContent = 'Select at least one option';
        return;
      }

      let password = '';
      for (let i = 0; i < length; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
      }

      passwordBox.textContent = password;
      passwordBox.style.animation = 'none';
      passwordBox.offsetHeight;
      passwordBox.style.animation = 'fadeIn 0.5s ease';
    }