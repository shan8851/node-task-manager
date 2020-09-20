const {
  calculateTip,
  fahrenheitToCelsius,
  celsiusToFahrenheit,
} = require("../src/math");

test("calc tip", () => {
  const total = calculateTip(10, 0.3);
  expect(total).toBe(13);
});

test("calc with default tip", () => {
  const total = calculateTip(100);
  expect(total).toBe(125);
});

test('Create "Should convert 32 F to 0 C', () => {
  const value = fahrenheitToCelsius(32);
  expect(value).toBe(0);
});

test("Should convert 0 C to 32 F", () => {
  const value = celsiusToFahrenheit(0);
  expect(value).toBe(32);
});

test("async test", (done) => {
  setTimeout(() => {
    expect(1).toBe(2);
    done();
  }, 2000);
});
