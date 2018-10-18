import Maybe from '.';
        const id = x => x;

describe("Testing Maybe",() => {


    it("tests for functor",() => {
        const add1 = jest.fn(x=>x+1);
        const res = Maybe.of(10)
        .map(add1)


        expect(res.fold(id)).toBe(Maybe.of(11).fold(id));
        expect(add1.mock.calls.length).toBe(1);
    });

    it ("tests for monad",() => {
        // F.of
        const m1 = Maybe.of("Foo");
        const m2 = Maybe.of("Bar")
        const concat = x=>y => x.concat(y);
        //F.chain (bind,foldMap)
        const res = m1
        .chain(x=> m2.map(concat(x))) // Maybe(FooBar)

        expect(res.fold(id)).toBe("FooBar");



    })
}); 