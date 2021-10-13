const logInBox = (text, width = null) => {
  let boxWidth = width ? width : text.length + 2;
  let verticalLine = `+${'-'.repeat(boxWidth)}+`;
  let emptyLine = `|${' '.repeat(boxWidth)}|`;
  let textLine = width ? `| ${text.slice(0, width - 2)} |` : `| ${text} |`;

  console.log(verticalLine);
  console.log(emptyLine);
  console.log(textLine);
  console.log(emptyLine);
  console.log(verticalLine);
};

logInBox('To boldly go where no one has gone before.');
logInBox('');
logInBox('To boldly go where no one has gone before.', 14);
