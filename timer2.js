const readline = require("readline");
const { stdin: input, stdout: output } = require("process");
const rl = readline.createInterface({ input, output });
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

input.on("keypress", (key) => {
  //ctrl+f exits
  if (key === "\u0003") {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }

  //b beeps
  if (key === "b") {
    process.stdout.write("\x07");
  }

  let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  console.log(numbers.includes(key));
  if (numbers.includes(key)) {
    console.log(`\nSetting timer for ${key} seconds...`);
    setTimeout(() => {
      process.stdout.write("\x07");
    }, 1000 * key);
  }
});
