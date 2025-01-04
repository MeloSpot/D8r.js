"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEqual = exports.isAfter = exports.isBefore = void 0;
// Date Comparison Functions (Before/After, Equal)
function isBefore(date1, date2) {
    return date1 < date2;
}
exports.isBefore = isBefore;
function isAfter(date1, date2) {
    return date1 > date2;
}
exports.isAfter = isAfter;
function isEqual(date1, date2) {
    return date1.getTime() === date2.getTime();
}
exports.isEqual = isEqual;
