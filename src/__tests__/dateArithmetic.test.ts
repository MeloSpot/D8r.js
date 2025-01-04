import { addDays, subtractDays, addMonths, subtractMonths, addYears, subtractYears } from '../dateArithmetic';

describe('Date Arithmetic', () => {
  describe('addDays', () => {
    it('should add days correctly', () => {
      const date = new Date('2024-01-01');
      const result = addDays(date, 5);
      expect(result.getDate()).toBe(6);
    });

    it('should handle month rollover', () => {
      const date = new Date('2024-01-30');
      const result = addDays(date, 5);
      expect(result.getMonth()).toBe(1); // February
      expect(result.getDate()).toBe(4);
    });
  });

  describe('subtractDays', () => {
    it('should subtract days correctly', () => {
      const date = new Date('2024-01-05');
      const result = subtractDays(date, 3);
      expect(result.getDate()).toBe(2);
    });
  });

  describe('addMonths', () => {
    it('should add months correctly', () => {
      const date = new Date('2024-01-15');
      const result = addMonths(date, 2);
      expect(result.getMonth()).toBe(2); // March
    });
  });

  describe('subtractMonths', () => {
    it('should subtract months correctly', () => {
      const date = new Date('2024-03-15');
      const result = subtractMonths(date, 1);
      expect(result.getMonth()).toBe(1); // February
    });
  });

  test('addYears', () => {
    const date = new Date('2024-01-15');
    const result = addYears(date, 1);
    expect(result.getFullYear()).toBe(2025);
  });

  test('subtractYears', () => {
    const date = new Date('2024-01-15');
    const result = subtractYears(date, 1);
    expect(result.getFullYear()).toBe(2023);
  });
}); 