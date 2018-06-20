import { mergeDeep } from './merge-deep';

interface T {
  [prop: string]: any;
}

describe('merge-deep', () => {
  let a: T;
  let b: T;

  it('should extend', () => {
    a = { x: 1 };
    b = { y: 5 };
    expect(mergeDeep(a, b)).toEqual({ x: 1, y: 5 });
  });

  it('should overwrite', () => {
    a = { x: 1 };
    b = { x: 5 };
    expect(mergeDeep(a, b)).toEqual({ x: 5 });
  });

  it('should not overwrite by undefined', () => {
    a = { x: 1 };
    b = { x: undefined };
    expect(mergeDeep(a, b)).toEqual({ x: 1 });
  });

  it('should overwrite by null', () => {
    a = { x: 1 };
    b = { x: null };
    expect(mergeDeep(a, b)).toEqual({ x: null });
  });

  it('should extend deep', () => {
    a = { x: 1, y: { z: 50, v: 60 } };
    b = { y: { g: 1000 } };
    expect(mergeDeep(a, b)).toEqual({ x: 1, y: { z: 50, v: 60, g: 1000 } });
  });

  it('should overwrite deep', () => {
    a = { x: 1, y: { z: 50, v: 60 } };
    b = { y: { v: 70 } };
    expect(mergeDeep(a, b)).toEqual({ x: 1, y: { z: 50, v: 70 } });
  });
});
