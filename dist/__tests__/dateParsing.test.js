"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dateParsing_1 = require("../dateParsing");
describe('Date Parsing', function () {
    describe('parseDate', function () {
        it('should parse ISO format correctly', function () {
            var dateStr = '2024-01-15';
            var result = (0, dateParsing_1.parseDate)(dateStr, { format: 'ISO' });
            expect(result.getFullYear()).toBe(2024);
            expect(result.getMonth()).toBe(0); // January is 0
            expect(result.getDate()).toBe(15);
        });
        it('should parse MM/DD/YYYY format correctly', function () {
            var dateStr = '01/15/2024';
            var result = (0, dateParsing_1.parseDate)(dateStr, { format: 'MM/DD/YYYY' });
            expect(result.getFullYear()).toBe(2024);
            expect(result.getMonth()).toBe(0);
            expect(result.getDate()).toBe(15);
        });
        it('should parse DD/MM/YYYY format correctly', function () {
            var dateStr = '15/01/2024';
            var result = (0, dateParsing_1.parseDate)(dateStr, { format: 'DD/MM/YYYY' });
            expect(result.getFullYear()).toBe(2024);
            expect(result.getMonth()).toBe(0);
            expect(result.getDate()).toBe(15);
        });
        it('should throw error for invalid date string', function () {
            expect(function () { return (0, dateParsing_1.parseDate)('invalid-date'); }).toThrow('Invalid date string');
        });
        it('should throw error for unsupported format', function () {
            expect(function () { return (0, dateParsing_1.parseDate)('2024-01-15', { format: 'INVALID' }); })
                .toThrow('Unsupported date format: INVALID');
        });
    });
    describe('formatDate', function () {
        var testDate = new Date(2024, 0, 15); // Jan 15, 2024
        it('should format date in ISO format', function () {
            var result = (0, dateParsing_1.formatDate)(testDate, { format: 'ISO' });
            expect(result).toMatch(/2024-01-15/);
        });
        it('should format date in default format', function () {
            var result = (0, dateParsing_1.formatDate)(testDate);
            expect(result).toMatch(/01\/15\/2024/);
        });
        it('should throw error for invalid date object', function () {
            expect(function () { return (0, dateParsing_1.formatDate)(new Date('invalid')); }).toThrow('Invalid date object');
        });
    });
});
