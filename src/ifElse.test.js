'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  let first;
  let second;

  beforeEach(() => {
    first = jest.fn();
    second = jest.fn();
  });

  it('should execute 1st callback if condition is true', () => {
    const condition = () => {
      return true;
    };

    ifElse(condition, first, second);

    expect(first).toHaveBeenCalled();
  });

  it('should not execute 2nd callback if condition is true', () => {
    const condition = () => {
      return true;
    };

    ifElse(condition, first, second);

    expect(second).not.toHaveBeenCalled();
  });

  it('should execute 2nd callback if condition is false', () => {
    const condition = () => {
      return false;
    };

    ifElse(condition, first, second);

    expect(second).toHaveBeenCalled();
  });

  it('should not execute 1st callback if condition is false', () => {
    const condition = () => {
      return false;
    };

    ifElse(condition, first, second);

    expect(first).not.toHaveBeenCalled();
  });
});
