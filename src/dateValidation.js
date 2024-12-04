"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidDate = isValidDate;
exports.isLeapYear = isLeapYear;
// Date Validation Functions (Is Valid, Leap Year Check)
function isValidDate(date) {
    return date instanceof Date && !isNaN(date.getTime());
}
function isLeapYear(year) {
    return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
}
