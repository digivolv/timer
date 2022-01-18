const slicedInputString = process.argv.slice(2);

// console.log("slicedInputString:", slicedInputString);

if (slicedInputString.length !== 0) {
  let timer = 0;
  for (let i = 0; i < slicedInputString.length; i++) {
    if (Number(slicedInputString[i]) < 0 || isNaN(slicedInputString[i])) {
      continue;
    } else {
      setTimeout(() => {
        process.stdout.write("\x07");
      }, (timer += slicedInputString[i] * 1000));
    }
  }
}
