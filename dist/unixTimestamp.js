"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromUnixTimestamp = exports.toUnixTimestamp = void 0;
// Unix Timestamp Conversion
function toUnixTimestamp(date) {
    return Math.floor(date.getTime() / 1000);
}
exports.toUnixTimestamp = toUnixTimestamp;
function fromUnixTimestamp(timestamp) {
    return new Date(timestamp * 1000);
}
exports.fromUnixTimestamp = fromUnixTimestamp;
