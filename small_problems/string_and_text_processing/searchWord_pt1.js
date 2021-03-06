/*
const searchWord = (word, text) => {
  let count = 0;

  text.split(' ').forEach(wordInText => {
    let cleanWord = [...wordInText].filter(char => /[a-z]/gi.test(char))
      .join('');
    console.log(cleanWord);
    if (cleanWord.toLowerCase() === word.toLowerCase()) {
      count += 1;
    }
  });

  return count;
};
*/

const searchWord = (word, text) => {
  let regex = new RegExp(`\\b${word}\\b`, 'gi');
  let matches = text.match(regex);

  return matches ? matches.length : 0;
};

const text = 'Sed sedut ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', text));      // 3