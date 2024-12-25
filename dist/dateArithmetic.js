"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDays = addDays;
exports.subtractDays = subtractDays;
exports.addMonths = addMonths;
exports.subtractMonths = subtractMonths;
exports.addYears = addYears;
exports.subtractYears = subtractYears;
function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}
function subtractDays(date, days) {
    return addDays(date, -days);
}
function addMonths(date, months) {
    var result = new Date(date);
    result.setMonth(result.getMonth() + months);
    return result;
}
function subtractMonths(date, months) {
    return addMonths(date, -months);
}
function addYears(date, years) {
    var result = new Date(date);
    result.setFullYear(result.getFullYear() + years);
    return result;
}
function subtractYears(date, years) {
    return addYears(date, -years);
}
