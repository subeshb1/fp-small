import Task from ".";

describe("Task", () => {
  it("Tests Task static Constructors", () => {
    expect(Task.of(1).fork(x => x, x => x)).toBe(1);
    expect(Task.rejected(1).fork(x => 0, x => x)).toBe(0);
  });

  it("Tests on Resolve", done => {
    expect(
      new Task((_, res) => res(10)).map(x => x + 10).fork(x => 0, x => x)
    ).toBe(20);

    new Task((_, res) => setTimeout(() => res(10), 100))
      .map(x => x + 10)
      .fork(x => 0, x => expect(x).toBe(20), done());
  });
});
