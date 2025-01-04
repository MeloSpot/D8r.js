export type DateFormat = 'MM/DD/YYYY' | 'DD/MM/YYYY' | 'YYYY.MM.DD' | 'ISO' | 'YYYY-MM-DD';

export interface DateFormatOptions {
  format?: DateFormat;
  locale?: string;
} 