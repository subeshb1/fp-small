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
});

describe("Testing Left", () => {
  it("tests right", () => {
    const id = jest.fn(x => x);
    const noCall = jest.fn(x => x);
    const data = Left(10)
      .map(x => x + 10)
      .fold(noCall, id);
    expect(data).toBe(10);
    expect(id.mock.calls.length).toBe(0);
    expect(noCall.mock.calls.length).toBe(1);
  });

  it("test functor", () => {
    const add2 = jest.fn(x => x + 2);
    const id = jest.fn(x => x);

    const result = Left(10).map(add2);
    expect(result.fold(id)).toEqual(Left(10).fold(id));
  });
});

describe("Testing fromNullable", () => {
  it("retrieves color from object", () => {
    const color = {
      red: "#f00",
      green: "#0f0",
      blue: "#00f"
    };

    const findColor = x =>
      fromNullable(color[x]).fold(x => "Not Found", x => x);

    const blue = findColor("blue");
    const red = findColor("red");
    const green = findColor("green");
    const purple = findColor("purple");

    expect(red).toBe("#f00");
    expect(green).toBe("#0f0");
    expect(blue).toBe("#00f");
    expect(purple).toBe("Not Found");
  });
});

describe("Testing TryCatch", () => {
  it("handles error", () => {
    const errorFunc = x => {
      throw "";
    };

    const func = () => {
      errorFunc();
    };
    const munc = () => {
      func();

    }

    const noError = () => {
      return 1;
    }
    const res1 = tryCatch(errorFunc)
      .map(x => x + 1)
      .fold(() => "Error", x => x);

    const res2 = tryCatch(func)
      .map(x => x + 1)
      .fold(() => "Error", x => x);
    const res3 = tryCatch(munc)
      .map(x => x + 1)
      .fold(() => "Error", x => x);

    const res4 = tryCatch(noError)
      .map(x => x + 1)
      .fold(() => "Error", x => x);

    expect(res1).toBe("Error");
    expect(res2).toBe("Error");
    expect(res3).toBe("Error");
    expect(res4).toBe(2);
  });
});
