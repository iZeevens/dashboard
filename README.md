# A/B Testing Dashboard

This project is a React-based dashboard for displaying a list of A/B tests.

## 🚀 Features
- Fetches data from a JSON API and displays it in a table
- Sorting (ASC/DESC) by **name, type, site, status**
- Filtering by test name
- Hover highlight effect for rows
- Removes `http://`, `https://`, and `www.` from site URLs
- Routing with `react-router-dom` (`/dashboard`, `/results/:testId`, `/finalize/:testId`)
- Keyboard navigation support

## 🛠 Tech Stack
- React (Vite)
- TypeScript
- React Router
- Axios

## 📦 Setup
1. Clone the repo:
```sh
   git clone https://github.com/iZeevens/dashboard
 ```
2. Install dependencies:
```sh
   npm install
```
3. Run the project:
```sh
   npm run dev
```
## API
The app fetches data from [Kameleoon API](https://development.kameleoon.net/oivanov/frontend-interview-task-api)