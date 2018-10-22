export const liftA2 = (f, fx, fy) => fx.map(f).ap(fy);
export const liftA3 = (f, fx, fy, fz) =>
  fx
    .map(f)
    .ap(fy)
    .ap(fz);

export const id = x => x;