import Maybe from '.';

describe("Testing Maybe",() => {
    it("tests for functor",() => {
        const add1 = jest.fn(x=>x+1);
        Maybe.of(10)
        .map(add1)
        expect(add1.mock.calls.length).toBe(1);
    })
}); 