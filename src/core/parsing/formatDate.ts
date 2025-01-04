import { DateFormat, DateFormatOptions } from '../../types/dateFormat';

export function formatDate(date: Date, options: DateFormatOptions = {}): string {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error('Invalid date object');
  }

  const { format = 'MM/DD/YYYY', locale = 'en-US' } = options;

  // Helper function to pad numbers with leading zeros
  const pad = (num: number): string => num.toString().padStart(2, '0');

  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());

  switch (format) {
    case 'ISO':
      return date.toISOString().split('T')[0];
    case 'YYYY-MM-DD':
      return `${year}-${month}-${day}`;
    case 'MM/DD/YYYY':
      return `${month}/${day}/${year}`;
    case 'DD/MM/YYYY':
      return `${day}/${month}/${year}`;
    case 'YYYY.MM.DD':
      return `${year}.${month}.${day}`;
    default:
      throw new Error(`Unsupported date format: ${format}`);
  }
} 