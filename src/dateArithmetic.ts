export function addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
  
  export function subtractDays(date: Date, days: number): Date {
    return addDays(date, -days);
  }
  
  export function addMonths(date: Date, months: number): Date {
    const result = new Date(date);
    result.setMonth(result.getMonth() + months);
    return result;
  }
  
  export function subtractMonths(date: Date, months: number): Date {
    return addMonths(date, -months);
  }
  
  export function addYears(date: Date, years: number): Date {
    const result = new Date(date);
    result.setFullYear(result.getFullYear() + years);
    return result;
  }
  
  export function subtractYears(date: Date, years: number): Date {
    return addYears(date, -years);
  }
  