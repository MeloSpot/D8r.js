"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUnixTimestamp = toUnixTimestamp;
exports.fromUnixTimestamp = fromUnixTimestamp;
// Unix Timestamp Conversion
function toUnixTimestamp(date) {
    return Math.floor(date.getTime() / 1000);
}
function fromUnixTimestamp(timestamp) {
    return new Date(timestamp * 1000);
}
