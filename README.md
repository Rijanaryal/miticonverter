# मिति · Miti: BS ⇄ AD date converter

Next.js + Tailwind CSS app that converts Nepali (Bikram Sambat) dates to English (AD) and back.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000. The logo and title animate on first load; tap to skip.

## Check the calendar math

The calendar data comes from the `nepali-date-converter` package, wrapped in `lib/bsCalendar.js`.
Check a few known dates on hamropatro.com before you rely on it:

- BS 2083 Baisakh 1 should be April 14, 2026 (Nepali New Year).
- Enter a day past the end of a month (e.g. 32) and the app should show the "doesn't exist" message.

If the package's method names differ in the version you install, update `adToBs()` and `bsToAd()` in `lib/bsCalendar.js`. Nothing else touches the package.

## Deploy

Push to GitHub and import the repo into Vercel. No environment variables are needed.
