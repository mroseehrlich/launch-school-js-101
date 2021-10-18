const reverseWords = string => {
  let words = string.split(' ');

  return words.map(word => {
    if (word.length >= 5) {
      return [...word].reverse().join('');
    }

    return word;
  }).join(' ');
};

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"