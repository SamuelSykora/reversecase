import {IProcessed} from "./types";
import fs from "fs";

export const reverseOrderAndCasing = (input: string) => {
  return input
    .split("")
    .map(character => /^[A-Z]$/.test(character) ? character.toLowerCase() : character.toUpperCase())
    .reverse()
    .join("");
}

export const saveResult = (result: IProcessed, fileName: string = 'processed.json'): Promise<string | null> => {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, JSON.stringify(result), 'utf-8', (err) => {
      if (err){
        console.error('An error has occurred while saving the result.')
        console.error(err);
        return reject("" + err)
      }
      resolve(null)
    })
  })
}