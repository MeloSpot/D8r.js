import { DateFormat } from '../../types/dateFormat';
import { formatRegex } from '../../utils/constants';

export function parseDate(dateString: string, format: DateFormat = 'YYYY.MM.DD'): Date {
  if (!dateString) {
    throw new Error('Date string is required');
  }

  // Move invalid date check before format check
  if (!/^\d{4}[-\.\/]\d{2}[-\.\/]\d{2}$/.test(dateString) && 
      !/^\d{2}\/\d{2}\/\d{4}$/.test(dateString)) {
    throw new Error('Invalid date string');
  }

  // Handle ISO format
  if (format === 'ISO' || format === 'YYYY-MM-DD') {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      throw new Error('Invalid date string');
    }
    return date;
  }

  const match = dateString.match(formatRegex[format]);
  if (!match) {
    throw new Error('Date string does not match format');
  }

  let year: number, month: number, day: number;

  switch (format) {
    case 'MM/DD/YYYY':
      [, month, day, year] = match.map(Number);
      break;
    case 'DD/MM/YYYY':
      [, day, month, year] = match.map(Number);
      break;
    case 'YYYY.MM.DD':
      [, year, month, day] = match.map(Number);
      break;
    default:
      throw new Error(`Unsupported date format: ${format}`);
  }

  const date = new Date(year, month - 1, day);
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date components');
  }

  return date;
} 