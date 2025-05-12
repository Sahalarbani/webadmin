# Admin Dashboard

This project is an admin dashboard built with React and styled using Tailwind CSS. It provides a modern and responsive interface for managing orders, customers, and other administrative tasks.

## Features

- **Responsive Layout**: The dashboard is designed to be fully responsive, providing an optimal viewing experience on both desktop and mobile devices.
- **Sidebar Navigation**: A left sidebar with navigation links to different sections of the dashboard, including Dashboard, Content, Customers, Orders, Shipping, and Product.
- **Order Details Cards**: Displays key metrics such as Total Orders, Total Pending Orders (with progress bar), and Total Dispatched Orders (with progress bar).
- **Today's Orders Table**: A table that lists today's orders with columns for Category, Verification, Pending, Dispatched, and Action. The Action column includes dropdown options for Dispatch and Send Tracking Email.
- **Interactive Calendar**: An interactive calendar component for viewing and managing dates.
- **Notification Badge**: A badge system to indicate pending verifications.
- **Multi-Level Access**: Supports different access levels for admin and staff users.
- **Auto-Refresh Table**: The orders table automatically refreshes every 60 seconds to display the latest data.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/admin-dashboard.git
   ```
2. Navigate to the project directory:
   ```
   cd admin-dashboard
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the development server, run:
```
npm start
```
This will launch the application in your default web browser at `http://localhost:3000`.

## Components

- **Calendar**: Displays an interactive calendar.
- **Card**: Represents a card displaying information.
- **NotificationBadge**: Displays a badge for pending verifications.
- **Sidebar**: Contains the navigation menu.
- **Table**: Renders the orders table.
- **TableRow**: Represents a single row in the orders table.

## Data

Dummy data is provided in `src/data/dummyData.json` for populating the dashboard and table.

## Custom Hooks

The project includes a custom hook `useAutoRefresh` located in `src/hooks/useAutoRefresh.js` to handle the auto-refresh functionality for the orders table.

## Styling

The project uses Tailwind CSS for styling. The configuration file is located at `tailwind.config.js`.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.