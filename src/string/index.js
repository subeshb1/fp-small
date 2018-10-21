import { curry, compose } from "../fp";
import { join, headOp, map, filter } from "../array";

export const trim = x => x.trim();
export const toUpper = str => str.toUpperCase();
export const toLower = str => str.toLowerCase();

export const replace = curry((match, withStr, str) =>
  str.replace(match, withStr)
);

export const split = curry((sp, str) => str.split(sp));

export const getCharCode = x => x.charCodeAt(0);
export const fromCharCode = x => String.fromCharCode(x);
export const concat = curry((x, y) => x.concat(y));
export const firstCapital = compose(
  join(""),
  headOp(toUpper),
  trim
);
export const isEmptyString = x => x === "";
export const notEmptyString = x => x !== "";
export const capitalize = compose(
  join(" "),
  map(firstCapital),
  filter(notEmptyString),
  split(/\s+/g)
);
