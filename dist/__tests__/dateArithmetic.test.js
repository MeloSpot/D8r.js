"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dateArithmetic_1 = require("../dateArithmetic");
describe('Date Arithmetic', function () {
    describe('addDays', function () {
        it('should add days correctly', function () {
            var date = new Date('2024-01-01');
            var result = (0, dateArithmetic_1.addDays)(date, 5);
            expect(result.getDate()).toBe(6);
        });
        it('should handle month rollover', function () {
            var date = new Date('2024-01-30');
            var result = (0, dateArithmetic_1.addDays)(date, 5);
            expect(result.getMonth()).toBe(1); // February
            expect(result.getDate()).toBe(4);
        });
    });
    describe('subtractDays', function () {
        it('should subtract days correctly', function () {
            var date = new Date('2024-01-05');
            var result = (0, dateArithmetic_1.subtractDays)(date, 3);
            expect(result.getDate()).toBe(2);
        });
    });
    describe('addMonths', function () {
        it('should add months correctly', function () {
            var date = new Date('2024-01-15');
            var result = (0, dateArithmetic_1.addMonths)(date, 2);
            expect(result.getMonth()).toBe(2); // March
        });
    });
    describe('subtractMonths', function () {
        it('should subtract months correctly', function () {
            var date = new Date('2024-03-15');
            var result = (0, dateArithmetic_1.subtractMonths)(date, 1);
            expect(result.getMonth()).toBe(1); // February
        });
    });
});
