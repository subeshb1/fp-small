import { fromNullable } from "../Either";
import { curry, compose } from "../fp";

export const prop = curry((prop, obj) => obj[prop]);
export const safeProp = curry((p, obj) =>
  compose(
    fromNullable,
    prop(p)
  )(obj)
);


