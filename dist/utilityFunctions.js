"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.endOfMonth = exports.startOfMonth = exports.endOfDay = exports.startOfDay = void 0;
// Utility Functions (Start/End of Day, Week, Month, etc.)
function startOfDay(date) {
    var result = new Date(date);
    result.setHours(0, 0, 0, 0);
    return result;
}
exports.startOfDay = startOfDay;
function endOfDay(date) {
    var result = new Date(date);
    result.setHours(23, 59, 59, 999);
    return result;
}
exports.endOfDay = endOfDay;
function startOfMonth(date) {
    var result = new Date(date);
    result.setDate(1);
    result.setHours(0, 0, 0, 0);
    return result;
}
exports.startOfMonth = startOfMonth;
function endOfMonth(date) {
    var result = new Date(date);
    result.setMonth(result.getMonth() + 1);
    result.setDate(0);
    result.setHours(23, 59, 59, 999);
    return result;
}
exports.endOfMonth = endOfMonth;
