const validCommands = [
  'PUSH',
  'ADD',
  'SUB',
  'MULT',
  'DIV',
  'MOD',
  'POP',
  'PRINT',
  'REMAINDER'
];

const invalidStackLength = (command, stack) => {
  if (['ADD', 'DIV', 'MULT', 'POP', 'REMAINDER', 'SUB']
    .includes(command) && stack.length === 0) {
    return true;
  }
  return false;
};

const invalidInput = (command) => {
  if (!validCommands.includes(command) && Number.isNaN(Number(command))) {
    return true;
  }
  return false;
};


// eslint-disable-next-line max-lines-per-function
const minilang = (string) => {
  let stack = [];
  let register = 0;

  // eslint-disable-next-line max-lines-per-function
  string.split(' ').forEach((command) => {

    if (invalidStackLength(command, stack)) {
      return console.log('Error: cannot perform operation on empty stack.');
    }

    if (invalidInput(command)) {
      return console.log('Error: invalid input');
    }

    switch (command) {
      case 'ADD':
        register += stack.pop();
        break;
      case 'DIV':
        register = Math.floor(register / stack.pop());
        break;
      case 'MULT':
        register *= stack.pop();
        break;
      case 'POP':
        register = stack.pop();
        break;
      case 'PUSH':
        stack.push(register);
        break;
      case 'PRINT':
        console.log(register);
        break;
      case 'REMAINDER':
        register = Math.floor(register % stack.pop());
        break;
      case 'SUB':
        register -= stack.pop();
        break;
      default:
        register = Number(command);
    }
  });

  return register;
};

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)

minilang('6 PUSH G0');

minilang('ADD');