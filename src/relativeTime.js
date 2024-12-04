"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeAgo = timeAgo;
exports.timeFromNow = timeFromNow;
// Relative Time Functions (Time Ago, From Now)
function timeAgo(date) {
    var diff = new Date().getTime() - date.getTime();
    var seconds = Math.floor(diff / 1000);
    if (seconds < 60)
        return "".concat(seconds, " seconds ago");
    var minutes = Math.floor(seconds / 60);
    if (minutes < 60)
        return "".concat(minutes, " minutes ago");
    var hours = Math.floor(minutes / 60);
    if (hours < 24)
        return "".concat(hours, " hours ago");
    var days = Math.floor(hours / 24);
    if (days < 30)
        return "".concat(days, " days ago");
    var months = Math.floor(days / 30);
    if (months < 12)
        return "".concat(months, " months ago");
    var years = Math.floor(months / 12);
    return "".concat(years, " years ago");
}
function timeFromNow(date) {
    var diff = date.getTime() - new Date().getTime();
    var seconds = Math.floor(diff / 1000);
    if (seconds < 60)
        return "in ".concat(seconds, " seconds");
    var minutes = Math.floor(seconds / 60);
    if (minutes < 60)
        return "in ".concat(minutes, " minutes");
    var hours = Math.floor(minutes / 60);
    if (hours < 24)
        return "in ".concat(hours, " hours");
    var days = Math.floor(hours / 24);
    if (days < 30)
        return "in ".concat(days, " days");
    var months = Math.floor(days / 30);
    if (months < 12)
        return "in ".concat(months, " months");
    var years = Math.floor(months / 12);
    return "in ".concat(years, " years");
}
