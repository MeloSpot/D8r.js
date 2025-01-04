"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subtractYears = exports.addYears = exports.subtractMonths = exports.addMonths = exports.subtractDays = exports.addDays = void 0;
function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}
exports.addDays = addDays;
function subtractDays(date, days) {
    return addDays(date, -days);
}
exports.subtractDays = subtractDays;
function addMonths(date, months) {
    var result = new Date(date);
    result.setMonth(result.getMonth() + months);
    return result;
}
exports.addMonths = addMonths;
function subtractMonths(date, months) {
    return addMonths(date, -months);
}
exports.subtractMonths = subtractMonths;
function addYears(date, years) {
    var result = new Date(date);
    result.setFullYear(result.getFullYear() + years);
    return result;
}
exports.addYears = addYears;
function subtractYears(date, years) {
    return addYears(date, -years);
}
exports.subtractYears = subtractYears;
