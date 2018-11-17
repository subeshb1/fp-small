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
      "Either",
      "fromCharCode",
      "fromNullable",
      "getCharCode",
      "head",
      "headOp",
      "isEmptyString",
      "join",
      "map",
      "notEmptyString",
      "mod",
      "prop",
      "replace",
      "safeProp",
      "split",
      "tail",
      "throttle",
      "toLower",
      "toUpper",
      "trim",
      "tryCatch",
      "fromTruth",
      "liftA2",
      "liftA3",
      "id",
      "LazyBox"
    ].sort();

    const fpList = [];

    for (let item in fp) {
      fpList.push(item);
    }
    fpList.sort();
    expect(JSON.stringify(list)).toBe(JSON.stringify(fpList));
  });
});
