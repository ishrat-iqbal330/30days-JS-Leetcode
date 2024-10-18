const createCounter = (init) => {
  let count = init;

  return {
    increment: () => {
      count += 1;
      return count;
    },
    decrement: () => {
      count -= 1;
      return count;
    },
    reset: () => {
      count = init;
      return count;
    },
  };
};

const counter = createCounter(6);
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
