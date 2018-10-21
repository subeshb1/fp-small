import { fromNullable, Right, Left, tryCatch } from "./index";
describe("Testing Right", () => { 
  it("tests right", () => {
    const id = jest.fn(x => x);
    const noCall = jest.fn(x => x);
    const data = Right(10)
      .map(x => x + 10)
      .fold(noCall, id);
    expect(data).toBe(20);
    expect(id.mock.calls.length).toBe(1);
    expect(noCall.mock.calls.length).toBe(0);
  });

  it("test functor", () => {
    const add2 = jest.fn(x => x + 2);
    const id = jest.fn(x => x);

    const result = Right(10).map(add2);
    expect(result.chain(id)).toEqual(Right(12).chain(id));
  });
  it("test functor", () => {
    const add2 = jest.fn(x => x + 2);
    const id = jest.fn(x => x);

    const result = Right(10).map(add2);
    expect(result.chain(id)).toEqual(Right(12).chain(id));
  });
});
