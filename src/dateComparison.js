"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBefore = isBefore;
exports.isAfter = isAfter;
exports.isEqual = isEqual;
// Date Comparison Functions (Before/After, Equal)
function isBefore(date1, date2) {
    return date1 < date2;
}
function isAfter(date1, date2) {
    return date1 > date2;
}
function isEqual(date1, date2) {
    return date1.getTime() === date2.getTime();
}
