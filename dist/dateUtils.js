"use strict";
// src/dateUtils.ts
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var DateParsing = __importStar(require("./dateParsing"));
var DateArithmetic = __importStar(require("./dateArithmetic"));
var DateComparison = __importStar(require("./dateComparison"));
var DateValidation = __importStar(require("./dateValidation"));
var TimeZone = __importStar(require("./timeZone"));
var RelativeTime = __importStar(require("./relativeTime"));
var UnixTimestamp = __importStar(require("./unixTimestamp"));
var UtilityFunctions = __importStar(require("./utilityFunctions"));
var DateUtils = {
    DateParsing: DateParsing,
    DateArithmetic: DateArithmetic,
    DateComparison: DateComparison,
    DateValidation: DateValidation,
    TimeZone: TimeZone,
    RelativeTime: RelativeTime,
    UnixTimestamp: UnixTimestamp,
    UtilityFunctions: UtilityFunctions,
};
exports.default = DateUtils;
