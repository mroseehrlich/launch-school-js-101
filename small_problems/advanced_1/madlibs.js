const madLibs = template => {
  let replacementWords = {
    adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
    noun: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
    verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
    adverb: ['easily', 'lazily', 'noisily', 'excitedly']
  };


  const replacement = (word) => {
    let partOfSpeech = word.replace(/[^a-z]/g, '');
    let randomIndex = Math.floor(Math.random() *
      replacementWords[partOfSpeech].length);

    return replacementWords[partOfSpeech][randomIndex];
  };

  return template.replace(/\[[a-z+]+\]/g, replacement);
};

let template1 = `
The [adjective] brown [noun] [adverb]
[verb] the [adjective] yellow
[noun], who [adverb] [verb] his
[noun] and looks around.
`;

let template2 = `
The [noun] [verb] the [noun]'s [noun].
`;

let template3 = `
The [noun] [verb] the [noun]'s [noun].
`;

console.log(madLibs(template1));
console.log(madLibs(template2));
console.log(madLibs(template3));