const cleanUp = (string) => {
  return string.replace(/[^a-z]/gi, " ").replace(/\s+/gi, " ");
};

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "