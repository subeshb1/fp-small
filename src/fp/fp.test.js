import { curry, compose } from ".";

describe("Testing Curry", () => {
  it("curries add function", () => {
    const mock = jest.fn((a, b) => a + b);
    const curryAdd = curry(mock);
    const add1 = curryAdd(1);
    const onePlusTwo = curryAdd(1)(2);

    expect(add1(10)).toBe(11);
    expect(onePlusTwo).toBe(3);

    expect(mock.mock.calls.length).toBe(2);
    expect(mock.mock.calls[0][1]).toBe(2);
    expect(mock.mock.calls[1][1]).toBe(10);

    expect(curry).toThrow();
  });
});

describe("Testing Compose", () => {
  it("composes functions", () => {
    const add1 = x => x + 1;
    const mul2 = x => x * 2;
    const sub1 = x => x - 1;

    const add1Mul2Sub1 = compose(
      sub1,
      mul2,
      add1
    );

    expect(add1Mul2Sub1(10)).toBe(sub1(mul2(add1(10))));
  });
});
