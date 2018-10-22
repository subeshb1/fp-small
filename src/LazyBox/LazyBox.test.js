import { LazyBox } from ".";
describe("LazyBox", () => {
  it("test laziness", () => {
    const lazyCall = jest.fn(x => x + 1);
    const res = LazyBox(() => 5).map(lazyCall);
    expect(lazyCall.mock.calls.length).toBe(0);
    const result = res.fold(lazyCall);
    expect(lazyCall.mock.calls.length).toBe(2);
    expect(result).toBe(7);
  });
});
