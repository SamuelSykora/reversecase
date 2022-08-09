import * as readline from "readline";
import {reverseOrderAndCasing, saveResult} from "./misc";

export const processString = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question("Input string:", async (input: string) => {
    const startTime = performance.now();
    const result = reverseOrderAndCasing(input);
    const endTime = performance.now();
    console.log(`Output: ${result}`);
    await saveResult({
      input: input,
      output: result,
      duration: endTime - startTime,
    });
    rl.close();
  })
}

processString();