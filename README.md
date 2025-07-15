# Invoice App

A small performant React Native (Expo) app to list and filter crypto invoices.  
Built for the technical challenge.

## Features

- **Invoice List:** Fetches and displays invoices from a public API.
- **Polling:** The invoice list automatically refreshes every 5 seconds (polling).
- **Infinite Scroll:** Load more invoices as you scroll to the end of the list.
- **Filters:** Quickly filter invoices by status (Completed Only) and by crypto type (All Cryptos).
- **Visual Loader:** Displays a loader every time the user switches filter/tag, for clear feedback.
- **API Debugging:** Integrated with [Reactotron](https://github.com/infinitered/reactotron) to inspect all network requests easily during development.
- **Optimized Fetching:** Uses Axios and React Query for efficient, performant, and cache-friendly API calls.
- **Centralized API Logic:** Custom Axios instance and a custom React Query hook for all invoice API logic, to avoid repetition and keep the code DRY.
- **Simple, Clean Architecture:** Minimal project structure and code, as the challenge requested. No unnecessary abstraction or over-engineering.

## Tech Stack

- [Expo (React Native)](https://expo.dev/)
- [React Query](https://tanstack.com/query/latest)
- [Axios](https://axios-http.com/)
- [Reactotron](https://github.com/infinitered/reactotron) (dev/debug only)

## Setup

```bash
git clone https://github.com/tu-usuario/invoiceApp.git
cd invoiceApp
npm install
npx expo start
```
