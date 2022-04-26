/**
 * 
👉 : moves the memory pointer to the next cell
👈 : moves the memory pointer to the previous cell
👆 : increment the memory cell at the current position
👇 : decreases the memory cell at the current position.
🤜 : if the memory cell at the current position is 0, jump just after the corresponding 🤛
🤛 : if the memory cell at the current position is not 0, jump just after the corresponding 🤜
👊 : Display the current character represented by the ASCII code defined by the current position.
 * 
 */

const MAX_MEMORY = 255;
const MIN_MEMORY = 0;

const OutputHandChallenge = (values) => {
  const instructions = Array.from(values);
  let memory = new Array();
  let position = 0;
  let i = 0; //index
  let text = "";
  const FistActions = {
    "👉": () => {
      position++;
      if (position === memory.length) {
        memory.push(MIN_MEMORY);
      }
    },
    "👈": () => {
      position = Math.max(0, position - 1);
    },
    "👆": () => {
      memory[position] =
        memory[position] === MAX_MEMORY ? MIN_MEMORY : memory[position] + 1;
    },
    "👇": () => {
      memory[position] =
        memory[position] === MIN_MEMORY ? MAX_MEMORY : memory[position] - 1;
    },
    "🤜": () => {
      if (memory[position] === 0) {
        i = RightFistOperation(i, instructions);
      }
    },
    "🤛": () => {
      if (memory[position] !== 0) {
        i = LeftFistOperation(i, instructions);
      }
    },
    "👊": () => {
      text += String.fromCharCode(memory[position]);
    },
  };

  memory.push(MIN_MEMORY); //init memory
  while (i < instructions.length) {
    FistActions[instructions[i]]();
    i++;
  }
  return text;
};

const LeftFistOperation = (index, instructions) => {
  let subIndex = index - 1;
  let loop = 1;

  while (loop !== 0) {
    if (instructions[subIndex] === "🤜") loop--;
    if (instructions[subIndex] === "🤛") loop++;
    subIndex--;
  }
  return subIndex + 1;
};

const RightFistOperation = (index, instructions) => {
  let subIndex = index + 1;
  let loop = 1;
  while (loop !== 0) {
    if (instructions[subIndex] === "🤜") loop++;
    if (instructions[subIndex] === "🤛") loop--;
    subIndex++;
  }
  return subIndex - 1;
};

console.log(
  OutputHandChallenge(
    "👇🤜👇👇👇👇👇👇👇👉👆👈🤛👉👇👊👇🤜👇👉👆👆👆👆👆👈🤛👉👆👆👊👆👆👆👆👆👆👆👊👊👆👆👆👊"
  )
);

console.log(
  OutputHandChallenge(
    "👉👆👆👆👆👆👆👆👆🤜👇👈👆👆👆👆👆👆👆👆👆👉🤛👈👊👉👉👆👉👇🤜👆🤛👆👆👉👆👆👉👆👆👆🤜👉🤜👇👉👆👆👆👈👈👆👆👆👉🤛👈👈🤛👉👇👇👇👇👇👊👉👇👉👆👆👆👊👊👆👆👆👊👉👇👊👈👈👆🤜👉🤜👆👉👆🤛👉👉🤛👈👇👇👇👇👇👇👇👇👇👇👇👇👇👇👊👉👉👊👆👆👆👊👇👇👇👇👇👇👊👇👇👇👇👇👇👇👇👊👉👆👊👉👆👊"
  )
);
