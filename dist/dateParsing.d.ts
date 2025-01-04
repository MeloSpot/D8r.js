type DateFormat = 'MM/DD/YYYY' | 'DD/MM/YYYY' | 'YYYY.MM.DD' | 'ISO' | 'YYYY-MM-DD';
interface DateFormatOptions {
    format?: DateFormat;
    locale?: string;
}
export declare function parseDate(dateString: string, format?: DateFormat): Date;
export declare function formatDate(date: Date, options?: DateFormatOptions): string;
export {};
