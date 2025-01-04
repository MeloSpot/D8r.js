// Relative Time Functions (Time Ago, From Now)
export function timeAgo(date: Date): string {
    const diff = new Date().getTime() - date.getTime();
    const seconds = Math.floor(diff / 1000);
    if (seconds < 60) return `${seconds} seconds ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minutes ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hours ago`;
    const days = Math.floor(hours / 24);
    if (days < 30) return `${days} days ago`;
    const months = Math.floor(days / 30);
    if (months < 12) return `${months} months ago`;
    const years = Math.floor(months / 12);
    return `${years} years ago`;
  }
  
  export function timeFromNow(date: Date): string {
    const diff = date.getTime() - new Date().getTime();
    const seconds = Math.floor(diff / 1000);
    if (seconds < 60) return `in ${seconds} seconds`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `in ${minutes} minutes`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `in ${hours} hours`;
    const days = Math.floor(hours / 24);
    if (days < 30) return `in ${days} days`;
    const months = Math.floor(days / 30);
    if (months < 12) return `in ${months} months`;
    const years = Math.floor(months / 12);
    return `in ${years} years`;
  }
  