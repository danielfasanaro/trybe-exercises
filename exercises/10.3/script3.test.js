const { test, expect } = require('@jest/globals');
const { randomNumber } = require('./script1');

test('#randomNumberTest3', () => {
  const mockRandomNumber = jest.fn(randomNumber)
    .mockImplementation((a, b, c) => a * b * c);

  expect(mockRandomNumber(2, 2, 2)).toBe(8);
  expect(mockRandomNumber).toHaveBeenCalledTimes(1);
  expect(mockRandomNumber).toHaveBeenCalledWith(2, 2, 2);

  mockRandomNumber.mockReset();
  mockRandomNumber.mockImplementation((a) => a * 2);

  expect(mockRandomNumber(4)).toBe(8);
  expect(mockRandomNumber).toHaveBeenCalledTimes(1);
  expect(mockRandomNumber).toHaveBeenCalledWith(4);
});
