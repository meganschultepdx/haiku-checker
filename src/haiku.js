export function isVowel(character) {
  if ((character === 'a') || (character === 'e') || (character === 'i') || (character === 'o') || (character === 'u') || (character === 'y')) {
    return true;
  } else {
    return false;
  }
}

export function findSyllableCount(str) {
  let wordArray = str.split(" ");
  let vowelCount = 0;
  wordArray.forEach(function(word) {
    let charArray = word.split("");
    if(charArray[charArray.length-1] === 'e' && charArray[charArray.length-2] !== 'l') {
      charArray.pop();
    }
    for (let i = 0; i <= charArray.length - 1; i++) {
      let letter = charArray[i];
      if (isVowel(letter)) {
        while (isVowel(charArray[i+1])) {
          charArray.splice(i+1, 1);
        }
          vowelCount ++;
      }
    }
  })
  return vowelCount;
}

export function isHaiku(line1, line2, line3) {
  let syllable1 = findSyllableCount(line1);
  let syllable2 = findSyllableCount(line2);
  let syllable3 = findSyllableCount(line3);
  return (syllable1 === 5) && (syllable2 === 7) && (syllable3 === 5)
}
