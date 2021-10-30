let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

Object.values(obj).forEach((arr) => {
  return arr.forEach(word => {
    return word.split('').forEach(char => {
      let vowels = ['a', 'e', 'i', 'o', 'u'];
      if (vowels.includes(char)) {
        console.log(char);
      }
    });
  });
});