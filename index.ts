import DateUtils from './src/dateUtils';

const date1 = DateUtils.DateParsing.parseDate('2024-11-01');
const date2 = DateUtils.DateParsing.parseDate('2024-12-01');

const newDate = DateUtils.DateArithmetic.addDays(date1, 5);
console.log('New Date (5 days later):', DateUtils.DateParsing.formatDate(newDate));

const isBefore = DateUtils.DateComparison.isBefore(date1, date2);
console.log('Is date1 before date2?', isBefore);