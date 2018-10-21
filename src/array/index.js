import { curry } from "../fp";

export const join = curry((st, ar) => ar.join(st));
export const head = ([x, ...xs]) => x;
export const tail = ([x, ...xs]) => xs;

export const headOp = curry((fn, x) => [fn(head(x)), ...tail(x)]);

export const map = curry((fn, arr) => arr.map(fn));

export const filter = curry((fn, x) => x.filter(fn));
