"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = exports.parseDate = void 0;
// Define the regex patterns at the top level
var formatRegex = {
    'MM/DD/YYYY': /^(\d{2})\/(\d{2})\/(\d{4})$/,
    'DD/MM/YYYY': /^(\d{2})\/(\d{2})\/(\d{4})$/,
    'YYYY.MM.DD': /^(\d{4})\.(\d{2})\.(\d{2})$/,
    'ISO': /^\d{4}-\d{2}-\d{2}(T[\d:\.]+Z)?$/,
    'YYYY-MM-DD': /^\d{4}-\d{2}-\d{2}$/
};
function parseDate(dateString, format) {
    var _a, _b, _c;
    if (format === void 0) { format = 'YYYY.MM.DD'; }
    if (!dateString) {
        throw new Error('Date string is required');
    }
    // Handle ISO format
    if (format === 'ISO' || format === 'YYYY-MM-DD') {
        var date_1 = new Date(dateString);
        if (isNaN(date_1.getTime())) {
            throw new Error('Invalid date string');
        }
        return date_1;
    }
    var match = dateString.match(formatRegex[format]);
    if (!match) {
        throw new Error('Date string does not match format');
    }
    var year, month, day;
    switch (format) {
        case 'MM/DD/YYYY':
            _a = match.map(Number), month = _a[1], day = _a[2], year = _a[3];
            break;
        case 'DD/MM/YYYY':
            _b = match.map(Number), day = _b[1], month = _b[2], year = _b[3];
            break;
        case 'YYYY.MM.DD':
            _c = match.map(Number), year = _c[1], month = _c[2], day = _c[3];
            break;
        default:
            throw new Error("Unsupported date format: ".concat(format));
    }
    var date = new Date(year, month - 1, day);
    if (isNaN(date.getTime())) {
        throw new Error('Invalid date components');
    }
    return date;
}
exports.parseDate = parseDate;
function formatDate(date, options) {
    if (options === void 0) { options = {}; }
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        throw new Error('Invalid date object');
    }
    var _a = options.format, format = _a === void 0 ? 'YYYY.MM.DD' : _a, _b = options.locale, locale = _b === void 0 ? 'en-US' : _b;
    switch (format) {
        case 'ISO':
            return date.toISOString();
        case 'YYYY-MM-DD':
            return date.toISOString().split('T')[0];
        default: {
            var dtf = new Intl.DateTimeFormat(locale, {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
            });
            return dtf.format(date);
        }
    }
}
exports.formatDate = formatDate;
