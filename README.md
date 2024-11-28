
# Weather App 🌤️

This is a full-stack weather application that allows users to search for weather data in various cities or based on their geolocation. The app is built with **React** for the frontend and **Node.js** for the backend, organized in separate folders.

---

## Features
- 🌍 **Fetch Weather Data:** Allows users to search weather data by entering a city or using their current location.
- 📡 **Backend API:** Handles requests to the weather API.
- 🚨 **Error Messages:** Displays error messages for invalid inputs or failed fetch attempts.
- 🎨 **Responsive Design:** Optimized for devices of all screen sizes.

---

## Folder Structure

```
project-root/
│
├── backend/          # Node.js backend for handling weather API requests
|   ├── src/ 
│       ├── server.ts     # Main server file
│       ├── utils/       # API routes
│   ├── package.json  # Backend dependencies
│   └── .env          # Backend environment variables
│
├── frontend/         # React frontend for user interaction
│   ├── src/          # React source files
│   ├── public/       # Public assets
│   ├── package.json  # Frontend dependencies
│   └── .env          # Frontend environment variables
│
└── README.md         # This file
```

---

## Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

---

## Installation

### Clone the repository:
```bash
git clone https://github.com/adiyakoby/WeatherApp
cd WeatherApp
```

### Install dependencies for both backend and frontend:

#### Backend:
```bash
cd backend
npm install
```

#### Frontend:
```bash
cd ../frontend
npm install
```

---

## Starting the App

#### Start the backend:
```bash
cd ../backend
npm run start:dev
```
The backend will run on `http://localhost:5000`.

#### Start the frontend:
```bash
cd ../frontend
npm run dev
```
The frontend will run on `http://localhost:5173`.


## Environment Variables

Set up environment variables for both the backend and frontend.

### Backend:
Create a `.env` file in the `backend/` directory:
```env
PORT=5000
API_KEY=your_weather_api_key
```

### Frontend:
Create a `.env` file in the `frontend/` directory:
```env
VITE_API_URL=http://localhost:5000/api
```

*** Replace `your_weather_api_key` with a valid key from your weather API provider.

---

## Usage

- Open the app in your browser at `http://localhost:5173`.
- Search for a city in the input box or allow geolocation to fetch your current location's weather data.

---

## License

This project is licensed under the MIT License.
