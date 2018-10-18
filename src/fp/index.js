export const curry = fn => {
  const len = fn.length;
  return function $curry(...args) {
    return args.length < len
      ? curry(fn.bind(null, ...args))
      : fn.call(null, ...args);
  };
};

export const compose = (...fns) => (...args) =>
  fns.reduceRight((acc, next) => [next.call(null, ...acc)], args)[0];


 

export const prop = curry((prop, obj) => obj[prop]);
export const safeProp = curry((p, obj) =>
  compose(
    fromNullable,
    prop(p)
  )(obj)
);

