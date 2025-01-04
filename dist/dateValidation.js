"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLeapYear = exports.isValidDate = void 0;
// Date Validation Functions (Is Valid, Leap Year Check)
function isValidDate(date) {
    return date instanceof Date && !isNaN(date.getTime());
}
exports.isValidDate = isValidDate;
function isLeapYear(year) {
    return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
}
exports.isLeapYear = isLeapYear;
