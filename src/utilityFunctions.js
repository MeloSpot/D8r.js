"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startOfDay = startOfDay;
exports.endOfDay = endOfDay;
exports.startOfMonth = startOfMonth;
exports.endOfMonth = endOfMonth;
// Utility Functions (Start/End of Day, Week, Month, etc.)
function startOfDay(date) {
    var result = new Date(date);
    result.setHours(0, 0, 0, 0);
    return result;
}
function endOfDay(date) {
    var result = new Date(date);
    result.setHours(23, 59, 59, 999);
    return result;
}
function startOfMonth(date) {
    var result = new Date(date);
    result.setDate(1);
    result.setHours(0, 0, 0, 0);
    return result;
}
function endOfMonth(date) {
    var result = new Date(date);
    result.setMonth(result.getMonth() + 1);
    result.setDate(0);
    result.setHours(23, 59, 59, 999);
    return result;
}
