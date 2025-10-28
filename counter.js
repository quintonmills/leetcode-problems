function createCounter(init) {
  let count = init;

  return {
    increment: function (init) {
      count += 1;
      return count;
    },
    decrement: function (expected) {
      count -= 1;
      return count;
    },
    reset: function (expected) {
      count = init;
      return count;
    },
  };
}

// const counter = createCounter(5);
// counter.increment(); //6
// counter.reset(); //5
// counter.decrement(); //4
