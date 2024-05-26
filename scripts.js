document.getElementById('length').addEventListener('input', function() {
    document.getElementById('lengthDisplay').textContent = this.value;
});

function generatePassword() {
    const useUppercase = document.querySelector('#uppercase').checked;
    const useLowercase = document.querySelector('#lowercase').checked;
    const useNumbers = document.querySelector('#numbers').checked;
    const useSpecialChars = document.querySelector('#specialChars').checked;

    console.log("Uppercase:", useUppercase);
    console.log("Lowercase:", useLowercase);
    console.log("Numbers:", useNumbers);
    console.log("SpecialChars:", useSpecialChars);

    // Check if at least one checkbox is checked
    if (!useUppercase && !useLowercase && !useNumbers && !useSpecialChars) {
        alert('Please select at least 1 checkbox for password');
        return; // Exit the function early if no checkboxes are checked
    }

    const length = document.getElementById('length').value;
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let allChars = '';
    if (useUppercase) allChars += upperChars;
    if (useLowercase) allChars += lowerChars;
    if (useNumbers) allChars += numberChars;
    if (useSpecialChars) allChars += specialChars;

    let password = '';
    for (let i = 0; i < length; i++) {
        password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }

    // Display the generated password
    const passwordDisplay = document.getElementById('passwordDisplay');
    passwordDisplay.textContent = password;
}

function copyPassword() {
    const password = document.getElementById('passwordDisplay').textContent;
    navigator.clipboard.writeText(password).then(() => {
        alert('Password copied to clipboard');
    });
}
