const sentence = "hello there from lighthouse labs";

let delayInMs = 0

for (const char of sentence) {
  setTimeout(() => {
  process.stdout.write(char);
  },delayInMs);
  delayInMs += 50;
};

setTimeout(() => {
  console.log();
},delayInMs);

