
//sending the prompt questions to gather information to generate the password based on the users feedback
var passwordLength = Number(prompt("How many characters would you like your password to be?"));
while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128)
    passwordLength = Number(prompt("passwordLength must be 8-128 characters. How many characters would you like your password to be?"));
var lowerCase = confirm("Would you like to use lowercase letters?");
var upperCase = confirm("Would you like to use uppercase letters?");
var isNumbers = confirm("Would you like to use Numbers?");
var isSpecialCharacters = confirm("Would you like to use special characters?");
while (!upperCase && !lowerCase && !isNumbers && !isSpecialCharacters) {
    alert("You must select at least one character type!");
    lowerCase = confirm("Would you like to use lowercase letters?");
    upperCase = confirm("Would you like to use uppercase letters?");
    isNumbers = confirm("Would you like to use Numbers?");
    isSpecialCharacters = confirm("Would you like to use special characters?");
}

//this function generates password based on the values stored in the above variables
function generatePassword() {
    var password = "";
    var passwordCategory = {};
    if (upperCase) password += rando(passwordCategory.upperCase = "UIOPASDFGHJCVBNMQWERTYKLZX");
    if (lowerCase) password += rando(passwordCategory.lowerCase = "uiopasdfghjklzxcvbnmqwerty");
    if (isNumbers) password += rando(passwordCategory.isNumbers = "1234567890");
    if (isSpecialCharacters) password += rando(passwordCategory.isSpecialCharacters = "&*(){}[]=<>/,.!@#$%^");
    //creating password
    for (var i = password.length; i < passwordLength; i++)
        password += rando(rando(passwordCategory).value);
    document.getElementById("password").value = randoSequence(password).join("");

}

