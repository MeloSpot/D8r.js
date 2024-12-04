// Date Comparison Functions (Before/After, Equal)
export function isBefore(date1: Date, date2: Date): boolean {
    return date1 < date2;
  }
  
  export function isAfter(date1: Date, date2: Date): boolean {
    return date1 > date2;
  }
  
  export function isEqual(date1: Date, date2: Date): boolean {
    return date1.getTime() === date2.getTime();
  }
  