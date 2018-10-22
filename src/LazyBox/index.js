export const LazyBox = g => ({
  map: f => LazyBox(() => f(g())),
  fold: f => f(g()),
  ap: l2 => l2.map(g),
  of: x => LazyBox(() => x)
});
