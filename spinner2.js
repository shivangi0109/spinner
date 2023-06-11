const spinnerCharacters = ['|', '/', '-', '\\'];

const spinner = () => {
  delay = 100;

  for (const char of spinnerCharacters) {
    setTimeout(() => {
      process.stdout.write(`\r${char}   `);
    }, delay);
    delay += 200;
  }
};

spinner();

// Add an additional setTimeout after the last character to print the newline character
setTimeout(() => {
  console.log(); // Print a newline
}, 1700);