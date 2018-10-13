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
