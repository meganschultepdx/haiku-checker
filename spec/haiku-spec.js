import { isVowel, findSyllableCount, isHaiku } from './../src/haiku.js';

describe('isVowel', function() {

  it('should determine whether character is a vowel', function() {
    const constArray = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm' ,'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];
    const vowelArray = ['a', 'e', 'i', 'o' , 'u', 'y'];
    constArray.forEach(function(cLetter) {
      expect(isVowel(cLetter)).toEqual(false);
    })
    vowelArray.forEach(function(vLetter) {
      expect(isVowel(vLetter)).toEqual(true);
    })
  });
});

describe('findSyllableCount', function() {

  it('should find syllable count in a str', function() {
    let str = 'Your programming';
    expect(findSyllableCount(str)).toEqual(4);
  });
});

describe('isHaiku', function() {

  it('should determine whether line1 has 5 syllables, line2 has 7 syllables, line3 has 5 syllables', function() {
    let line1 = 'your programming is';
    let line2 = 'beautiful and elegant';
    let line3 = 'and so are you, wink';
    expect(isHaiku(line1, line2, line3)).toEqual(true);
  });
});
