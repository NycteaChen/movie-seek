const throttle = <T extends (...args: unknown[]) => unknown>(fn: T, delay = 500) => {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<T>) => {
    if (timer) return;
    timer = setTimeout(() => {
      fn(...args);
      timer = null;
    }, delay);
  };
};

export default throttle;
