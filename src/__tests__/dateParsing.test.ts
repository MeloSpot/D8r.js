import { parseDate, formatDate, DateFormat } from '../dateParsing';

describe('Date Parsing', () => {
  describe('parseDate', () => {
    it('should parse ISO format correctly', () => {
      const dateStr = '2024-01-15';
      const result = parseDate(dateStr, 'ISO');
      expect(result.getFullYear()).toBe(2024);
      expect(result.getMonth()).toBe(0); // January is 0
      expect(result.getDate()).toBe(15);
    });

    it('should parse MM/DD/YYYY format correctly', () => {
      const dateStr = '01/15/2024';
      const result = parseDate(dateStr, 'MM/DD/YYYY');
      expect(result.getFullYear()).toBe(2024);
      expect(result.getMonth()).toBe(0);
      expect(result.getDate()).toBe(15);
    });

    it('should parse DD/MM/YYYY format correctly', () => {
      const dateStr = '15/01/2024';
      const result = parseDate(dateStr, 'DD/MM/YYYY');
      expect(result.getFullYear()).toBe(2024);
      expect(result.getMonth()).toBe(0);
      expect(result.getDate()).toBe(15);
    });

    it('should throw error for invalid date string', () => {
      expect(() => parseDate('invalid-date')).toThrow('Invalid date string');
    });

    it('should throw error for unsupported format', () => {
      expect(() => parseDate('2024-01-15', 'INVALID' as DateFormat))
        .toThrow('Unsupported date format: INVALID');
    });

    it('should handle empty date string', () => {
      expect(() => parseDate('')).toThrow('Date string is required');
    });

    it('should handle null/undefined format', () => {
      const dateStr = '2024-01-15';
      const result = parseDate(dateStr);
      expect(result).toBeInstanceOf(Date);
    });

    it('should handle malformed dates in various formats', () => {
      expect(() => parseDate('2024-13-45', 'ISO')).toThrow();
      expect(() => parseDate('13/45/2024', 'MM/DD/YYYY')).toThrow();
      expect(() => parseDate('45/13/2024', 'DD/MM/YYYY')).toThrow();
    });
  });

  describe('formatDate', () => {
    const testDate = new Date(Date.UTC(2024, 0, 15)); // Jan 15, 2024 UTC

    it('should format date in ISO format', () => {
      const result = formatDate(testDate, { format: 'ISO' });
      expect(result).toMatch(/2024-01-15/);
    });

    it('should format date in default format', () => {
      const result = formatDate(testDate);
      expect(result).toMatch(/01\/15\/2024/);
    });

    it('should throw error for invalid date object', () => {
      expect(() => formatDate(new Date('invalid'))).toThrow('Invalid date object');
    });

    it('should format date in YYYY-MM-DD format', () => {
      const result = formatDate(testDate, { format: 'YYYY-MM-DD' });
      expect(result).toBe('2024-01-15');
    });

    it('should format date in DD/MM/YYYY format', () => {
      const result = formatDate(testDate, { format: 'DD/MM/YYYY' });
      expect(result).toBe('15/01/2024');
    });

    it('should format date in YYYY.MM.DD format', () => {
      const result = formatDate(testDate, { format: 'YYYY.MM.DD' });
      expect(result).toBe('2024.01.15');
    });
  });
}); 