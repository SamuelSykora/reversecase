import { equal, fail } from "assert";
import {reverseOrderAndCasing, saveResult} from "../src/misc";
import {IProcessed} from "../src/types";


describe("Helper function tests", () => {
  it("should save correct result into the file", async () => {
    const input = {
      input: 'abCD12',
      output: '21dcBA',
      duration: 1
    } as IProcessed
    try{
      const result = await saveResult(input, './test/processed.json');
      result && fail("Saving failed: " + result);
      const savedFile = require('./processed.json');
      const parsedSavedFile = savedFile as IProcessed;
      equal(input.input, parsedSavedFile.input);
      equal(input.output, parsedSavedFile.output);
      equal(input.duration, parsedSavedFile.duration);
    } catch (e) {
      fail("File save test failed: " + e);
    }
  });

  it("should return reversed string with reversed lower and upper cases", () => {
    equal(reverseOrderAndCasing("abCD12"), "21dcBA");
  });
});