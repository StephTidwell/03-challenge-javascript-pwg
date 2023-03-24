// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate password function
function generatePassword() {
  var length = parseInt(
    prompt(
      "Enter the desired length of your password (must be at least 8 characters):"
    )
  );
  while (isNaN(length) || length < 8) {
    length = parseInt(
      prompt("Invalid length. Please enter a number that is at least 8:")
    );
  }

  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const digitChars = "0123456789";
  const specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  const allChars = uppercaseChars + lowercaseChars + digitChars + specialChars;

  let password = "";
  for (let i = 0; i < length; i++) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
