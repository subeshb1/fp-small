import { prop } from ".";

describe("Testing prop", () => {
  it("prop functions", () => {
    const obj = { name: 1 };
    expect(prop("name", obj)).toBe(1);
  });
});
