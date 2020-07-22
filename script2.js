
//sending the prompt questions to gather information to generate the password based on the users feedback
var passwordLength = Number(prompt("How many characters would you like your password to be?"));
while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) 
    passwordLength = Number(prompt("passwordLength must be 8-128 characters. How many characters would you like your password to be?"));
var upperCase = confirm("Would you like to use uppercase letters?");
var lowerCase = confirm("Would you like to use lowercase letters?");
var isNumbers = confirm("Would you like to use isNumbers?");
var symbols = confirm("Would you like to use special characters?");
while (!upperCase && !lowerCase && !isNumbers && !symbols) {
    alert("You must select at least one character type!");
    upperCase = confirm("Would you like to use uppercase letters?");
    lowerCase = confirm("Would you like to use lowercase letters?");
    isNumbers = confirm("Would you like to use isNumbers?");
    symbols = confirm("Would you like to use special characters?");
}

//this function generates password based on the values stored in the above variables
function generateNewPassword() {
    var password = "";
    var passwordCategory = {};
    if (upperCase) password += rando(passwordCategory.upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM");
    console.log(passwordCategory.upperCase);
    if (lowerCase) password += rando(passwordCategory.lowerCase = "qwertyuiopasdfghjklzxcvbnm");
    if (isNumbers) password += rando(passwordCategory.isNumbers = "1234567890");
    if (symbols) password += rando(passwordCategory.symbols = "!@#$%^&*(){}[]=<>/,.");
    //creating password
    for (var i = password.passwordLength; i < passwordLength; i++) 
        password += rando(rando(passwordCategory).value);
        document.getElementById("password").value = randoSequence(password).join("");
