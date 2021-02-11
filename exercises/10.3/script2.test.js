const { test, expect } = require('@jest/globals');
const { randomNumber } = require('./script1');


test('#randomNumberTest2', () => {
  const mockRandomNumber = jest.fn(randomNumber)
    .mockImplementationOnce((a, b) => Math.round(a / b))
    .mockReturnValue(5);

  expect(mockRandomNumber(2, 1)).toBe(2);
  expect(mockRandomNumber).toHaveBeenCalledTimes(1);
  expect(mockRandomNumber).toHaveBeenCalledWith(2, 1);

  expect(mockRandomNumber(2, 1)).not.toBe(2);
  expect(mockRandomNumber).toHaveBeenCalledTimes(2);
});
