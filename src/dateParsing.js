"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDate = parseDate;
exports.formatDate = formatDate;
function parseDate(dateString, format) {
    if (format === void 0) { format = 'YYYY-MM-DD'; }
    return new Date(dateString);
}
function formatDate(date, format) {
    if (format === void 0) { format = 'YYYY-MM-DD'; }
    var options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
}
