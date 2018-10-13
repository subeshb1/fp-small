import * as fp from "./index";
describe("Testing Maybe", () => {
  it("runs", () => {
    const add = fp.curry((a, b) => a + b);
    const add1 = add(1);
    expect(add1(1)).toBe(2);
  });
});
