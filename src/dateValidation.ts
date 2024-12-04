// Date Validation Functions (Is Valid, Leap Year Check)
export function isValidDate(date: Date): boolean {
    return date instanceof Date && !isNaN(date.getTime());
  }
  
  export function isLeapYear(year: number): boolean {
    return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
  }
  