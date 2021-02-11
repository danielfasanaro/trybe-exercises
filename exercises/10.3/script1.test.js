const { expect, test } = require('@jest/globals');
const randomNumber = require('./script1');

test('#randomNumber', () => {
  const randomNumberMock = jest.fn(randomNumber).mockReturnValue(10);

  expect(randomNumberMock()).toBe(10);
  expect(randomNumberMock).toHaveBeenCalled();
  expect(randomNumberMock).toHaveBeenCalledTimes(1);
});
