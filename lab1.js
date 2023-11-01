//itration 1
let hacker1 = "Abeer";
console.log("The driver's name is",hacker1);
let hacker2 = "Ahmad";
console.log("The navigator's name is",hacker2);
//iteration 2
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has, ${hacker2.length}, characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length}, characters!`);
  }
//itration 3
let hacker1Capitalized = "";
  for (let i = 0; i < hacker1.length; i++) {
    hacker1Capitalized += hacker1[i].toUpperCase() + " ";
  }
  console.log(hacker1Capitalized.trim());
  
  let hacker2Reversed = "";
  for (let i = hacker2.length - 1; i >= 0; i--) {
    hacker2Reversed += hacker2[i];
  }
  console.log(hacker2Reversed);
  //BONUS
// Generate 3 paragraphs using the Lorem Ipsum generator website
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod libero ut eros vulputate, et efficitur lacus vulputate. Quisque ex ante, pharetra sit amet nisi sed, consequat dignissim est. Donec ac odio ac libero efficitur aliquet. In id magna eget elit hendrerit bibendum. Nulla nec felis semper, efficitur erat vitae, venenatis velit. Sed tristique tortor vitae sapien congue, ac semper ex aliquam. Vivamus in metus a ex mollis consectetur. Curabitur quis feugiat elit. Aliquam ultrices quam a erat lobortis, quis iaculis lacus iaculis. Etiam tincidunt, nunc sed varius tincidunt, dolor ex semper felis, at fringilla elit nisi sit amet elit. Aenean tincidunt, est id bibendum pulvinar, urna neque condimentum nunc, in facilisis ex leo fermentum dui. Nam id luctus diam. Cras tempor lacinia lacus, sed auctor est.

Vestibulum sagittis dui mauris, a pharetra augue ultrices eget. Ut id orci euismod, tincidunt lectus at, feugiat ex. Maecenas eget arcu quis leo laoreet consectetur. Integer non turpis rhoncus, faucibus nulla eu, aliquam massa. Cras vitae lacus urna. Phasellus consequat, purus id hendrerit varius, augue felis porta tortor, at ullamcorper erat felis auctor ipsum. Integer fermentum sapien a pharetra pellentesque. Sed placerat cursus neque, non aliquet sem fringilla id. Nunc eget lobortis lectus. Donec euismod tellus id nulla interdum tincidunt. Suspendisse potenti. Nulla facilisi. Mauris dignissim tortor non sem tristique, et sollicitudin nisl viverra. Donec pharetra metus sit amet est vulputate, id porttitor tortor suscipit.

Phasellus efficitur arcu sit amet erat fringilla porta. Curabitur volutpat, enim eu efficitur efficitur, orci tortor finibus massa, sit amet vulputate lacus justo vitae ligula. Aenean eget enim nunc. Pellentesque id urna vitae lacus dictum dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat. Vestibulum euismod erat quis justo luctus vestibulum. Integer ut mauris vitae ligula accumsan eleifend. Pellentesque consectetur libero et massa feugiat facilisis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed at odio in libero iaculis sagittis. Nullam ut vehicula tellus, id convallis est. Sed rutrum pharetra est, nec tristique lacus suscipit sed.`;

// Count the number of words in the string
let wordsCount = 0;
for (let i = 0; i < longText.length; i++) {
  if (longText[i] === " " || longText[i] === "\n") {
    wordsCount++;
  }
}
wordsCount++; // Increment by 1 to account for the last word
console.log("Number of words in the string:", wordsCount);

// Count the number of times the Latin word "et" appears
let etCount = 0;
for (let i = 0; i < longText.length; i++) {
  if (longText.slice(i, i + 2) === "et") {
    etCount++;
  }
}
console.log("Number of times 'et' appears:", etCount);

// Bonus 2: Check if a string is a palindrome
var phraseToCheck = "A man, a plan, a canal, Panama!";

// Function to clean the phrase by removing non-alphabetic characters and converting to lowercase
function cleanString(phrase) {
  var cleanedString = "";
  for (var i = 0; i < phrase.length; i++) {
    var char = phrase[i];
    if (isLetter(char)) {
      cleanedString += char.toLowerCase();
    }
  }
  return cleanedString;
}

// Function to check if the cleaned string is a palindrome
function isPalindrome(phrase) {
  var cleanedPhrase = cleanString(phrase);
  var length = cleanedPhrase.length;
  for (var i = 0; i < length / 2; i++) {
    if (cleanedPhrase[i] !== cleanedPhrase[length - 1 - i]) {
      return false;
    }
  }
  return true;
}

// Helper function to check if a character is a letter
function isLetter(char) {
  return /^[A-Za-z]$/.test(char);
}

// Check if the phrase is a palindrome
if (isPalindrome(phraseToCheck)) {
  console.log("The value is a palindrome.");
} else {
  console.log("The value is not a palindrome.");
}






