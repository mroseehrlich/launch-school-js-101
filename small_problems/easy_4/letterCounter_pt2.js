const wordSizes = (string) => {

  let words = string.split(" ");
  let sizes = {};

  words.forEach(word => {
    if (word.length === 0) return;
    let cleanWord = word.replace(/[^A-Za-z]/gi, '');

    if (!sizes[cleanWord.length]) {
      sizes[cleanWord.length] = 0;
    }

    sizes[cleanWord.length] += 1;

  });


  console.log(sizes);
};

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}