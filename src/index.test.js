import * as fp from "./index";
describe("Testing Module", () => {
  it("Checks if all the available modules are imported", () => {
    const list = [
      "Left",
      "Maybe",
      "Right",
      "Task",
      "capitalize",
      "compose",
      "concat",
      "curry",
      "filter",
      "firstCapital",
      "fromCharCode",
      "fromNullable",
      "getCharCode",
      "head",
      "headOp",
      "isEmptyString",
      "join",
      "map",
      "notEmptyString",
      "prop",
      "replace",
      "safeProp",
      "split",
      "tail",
      "throttle",
      "toLower",
      "toUpper",
      "trim",
      "tryCatch"
    ].sort();

    const fpList = [];

    for (let item in fp) {
      fpList.push(item);
    }
    fpList.sort();
    expect(JSON.stringify(list)).toBe(JSON.stringify(fpList));
  });
});
