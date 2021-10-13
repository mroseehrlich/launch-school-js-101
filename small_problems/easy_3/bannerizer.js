const wrappedText = (text, width) => {
  let lineLength = width - 2;

  do {
    if (text.length + 2 < lineLength) {
      console.log(`| ${text}${' '.repeat(text.length + 1)}|`);
    } else {
      console.log(`| ${text.slice(0, lineLength)} |`);
    }
    text = text.slice(lineLength, text.length);
  } while (text.length > 0);

};

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

const logInABoxWrappedText = (text, width = null) => {
  let boxWidth = width ? width : text.length + 2;
  let verticalLine = `+${'-'.repeat(boxWidth)}+`;
  let emptyLine = `|${' '.repeat(boxWidth)}|`;
  let textLine = width ? `| ${text.slice(0, width - 2)} |` : `| ${text} |`;

  console.log(verticalLine);
  console.log(emptyLine);
  if (width) {
    wrappedText(text, width);
  } else {
    console.log(textLine);
  }
  console.log(emptyLine);
  console.log(verticalLine);
};


logInBox('To boldly go where no one has gone before.');
logInBox('');
logInBox('To boldly go where no one has gone before.', 14);
logInABoxWrappedText('To boldly go where no one has gone before.', 14);

