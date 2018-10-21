import { firstCapital, capitalize } from ".";
import { map } from "../array";
describe("Testing Capitalize", () => {
  it("Tests firstCapital", () => {
    const testStrs = map(firstCapital, [
      "small string",
      "                    let 1",
      "test a"
    ]).sort();

    const output = ["Small string", "Let 1", "Test a"].sort();

    expect(JSON.stringify(testStrs)).toBe(JSON.stringify(output));
  });

  it("Tests capitalize", () => {
    const testStrs = map(capitalize, [
      "small string",
      "                    let 1",
      "test a b"
    ]).sort();

    const output = ["Small String", "Let 1", "Test A B"].sort();

    expect(JSON.stringify(testStrs)).toBe(JSON.stringify(output));
    expect(capitalize("subesh bhandari")).toBe("Subesh Bhandari");
  });
});
