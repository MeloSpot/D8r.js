// Time Zone Conversion
export function convertTimeZone(date: Date, timeZone: string): string {
    return new Intl.DateTimeFormat('en-US', { timeZone }).format(date);
  }
  