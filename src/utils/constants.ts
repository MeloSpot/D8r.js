import { DateFormat } from '../types/dateFormat';

export const formatRegex: Record<DateFormat, RegExp> = {
  'MM/DD/YYYY': /^(\d{2})\/(\d{2})\/(\d{4})$/,
  'DD/MM/YYYY': /^(\d{2})\/(\d{2})\/(\d{4})$/,
  'YYYY.MM.DD': /^(\d{4})\.(\d{2})\.(\d{2})$/,
  'ISO': /^\d{4}-\d{2}-\d{2}(T[\d:\.]+Z)?$/,
  'YYYY-MM-DD': /^\d{4}-\d{2}-\d{2}$/
}; 