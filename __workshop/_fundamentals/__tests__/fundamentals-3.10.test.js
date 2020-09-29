// We import (require) the function that we want to test.
const makeIntoTitle = require("../fundamentals-3.10");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 10", () => {
  expect(makeIntoTitle("a bb ccc dddd e ff ggg")).toBe(
    "A Bb Ccc Dddd E Ff Ggg"
  );
  // add more tests here...
  expect(makeIntoTitle("ffAA FDff")).toBe("Ffaa Fdff");
  expect(makeIntoTitle("asdf asdf asdf")).toBe("Asdf Asdf Asdf");
});

// More info on jest expect: https://jestjs.io/docs/en/expect
