# D8r.js 🗓️

A lightweight, type-safe date manipulation library for JavaScript and TypeScript applications.

[![npm version](https://badge.fury.io/js/d8r.svg)](https://badge.fury.io/js/d8r)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## Features ✨

- 🔄 Date arithmetic (add/subtract days, months, years)
- 📝 Parse and format dates with ease
- ⚖️ Compare dates ( before, after, equal)
- ✅ Validate dates and check leap years
- 🕒 Unix timestamp conversion
- 🛠️ Utility functions (start/end of day, month)
- 📦 Zero dependencies
- 💪 Full TypeScript support

## Installation 📥

```bash
npm install d8r
# or
yarn add d8r
```

## Usage 🚀

```typescript
// Modern ES imports
import { parseDate, formatDate } from 'd8r';

// Parse dates
const date = parseDate('2024-01-15', 'YYYY-MM-DD');
console.log(formatDate(date, { format: 'DD/MM/YYYY' })); // "15/01/2024"

// Date arithmetic
import { addDays } from 'd8r/core';
const futureDate = addDays(date, 5);
```

The library is almost production-ready with:
✅ Type definitions
✅ Test coverage
✅ Build configuration
✅ Package exports
✅ Documentation

Final checklist before publishing:
1. Run `npm run test` (verify all tests pass)
2. Run `npm run build` (check dist output)
3. Run `npm pack` (test package locally)
4. Review documentation
5. Check bundle size with `npm run analyze`

Would you like me to help implement any of these final items?