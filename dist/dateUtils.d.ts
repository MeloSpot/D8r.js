import * as DateParsing from './dateParsing';
import * as DateArithmetic from './dateArithmetic';
import * as DateComparison from './dateComparison';
import * as DateValidation from './dateValidation';
import * as TimeZone from './timeZone';
import * as RelativeTime from './relativeTime';
import * as UnixTimestamp from './unixTimestamp';
import * as UtilityFunctions from './utilityFunctions';
declare const DateUtils: {
    DateParsing: typeof DateParsing;
    DateArithmetic: typeof DateArithmetic;
    DateComparison: typeof DateComparison;
    DateValidation: typeof DateValidation;
    TimeZone: typeof TimeZone;
    RelativeTime: typeof RelativeTime;
    UnixTimestamp: typeof UnixTimestamp;
    UtilityFunctions: typeof UtilityFunctions;
};
export default DateUtils;
