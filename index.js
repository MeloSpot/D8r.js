"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dateUtils_1 = require("./src/dateUtils");
var date1 = dateUtils_1.default.DateParsing.parseDate('2024-11-01');
var date2 = dateUtils_1.default.DateParsing.parseDate('2024-12-01');
var newDate = dateUtils_1.default.DateArithmetic.addDays(date1, 5);
console.log('New Date (5 days later):', dateUtils_1.default.DateParsing.formatDate(newDate));
var isBefore = dateUtils_1.default.DateComparison.isBefore(date1, date2);
console.log('Is date1 before date2?', isBefore);
