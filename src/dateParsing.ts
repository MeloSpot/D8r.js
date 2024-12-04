export function parseDate(dateString: string, format: string = 'YYYY-MM-DD'): Date {
    return new Date(dateString); 
  }
  
  export function formatDate(date: Date, format: string = 'YYYY-MM-DD'): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }
  