"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertTimeZone = convertTimeZone;
// Time Zone Conversion
function convertTimeZone(date, timeZone) {
    return new Intl.DateTimeFormat('en-US', { timeZone: timeZone }).format(date);
}
