// Unix Timestamp Conversion
export function toUnixTimestamp(date: Date): number {
    return Math.floor(date.getTime() / 1000);
  }
  
  export function fromUnixTimestamp(timestamp: number): Date {
    return new Date(timestamp * 1000);
  }
  