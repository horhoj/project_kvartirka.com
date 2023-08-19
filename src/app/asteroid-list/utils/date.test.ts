import { nextDate, prevDate } from './date';

describe('asteroid list utils nextDate', () => {
  it('test1', () => {
    expect(nextDate('2023-08-20')).toBe('2023-08-21');
    expect(nextDate('2022-08-20')).toBe('2022-08-21');
  });
});

describe('asteroid list utils prevDate', () => {
  it('test1', () => {
    expect(prevDate('2023-08-20')).toBe('2023-08-19');
    expect(prevDate('2022-08-20')).toBe('2022-08-19');
  });
});
