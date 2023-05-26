function frequencyCounter(word) {
  var frequencies = {};  
  for (var i = 0; i < word.length; i++) {
    var char = word[i];
    if (frequencies[char]) {
      frequencies[char]++;
    } else {
      frequencies[char] = 1;
    }
  }  
  return frequencies;
}


// Do not edit this line;
module.exports = frequencyCounter;
