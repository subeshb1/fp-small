import { curry } from "../fp";
export const throttle = (callback, sec = 0) => {
  let currentTime = 0;
  return (...args) => {
    const presentTime = Date.now();
    if (presentTime - currentTime >= sec) {
      callback(...args);
      currentTime = presentTime;
    }
  };
};

export const mod = curry((m, val) => {
  while (val < 0) {
    val += m;
  }
  return val % m;
});
