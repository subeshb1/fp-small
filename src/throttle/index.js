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
