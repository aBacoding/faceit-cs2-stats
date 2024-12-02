# Faceit CS2 Stats

## Overview

This project provides statistics for Faceit CS2 matches using an integrated API. There is no backend server from our side; all data is fetched directly from the API.

## Architecture

- **Frontend**: The frontend is built using React.js. It communicates directly with the Faceit CS2 API to fetch and display match statistics.
  - **Components**: The application is divided into reusable components such as `MatchList`, `PlayerStats`, and `Leaderboard`.
  - **State Management**: State is managed using Redux Toolkit to handle global state and API responses.
  - **Routing**: React Router is used for navigation between different views like home, match details, and player profiles.
  - **Styling**: Tailwind CSS is used for styling the application.
  - **UI Components**: Shadcn is used for UI components.
  - **Folder Structure**: The project follows the Feature-Sliced Design (FSD) architecture.
    - `src/app`: Application-level configurations and setup.
    - `src/entities`: Domain entities and their logic.
    - `src/modules`: Feature-specific logic and components.
    - `src/shared`: Shared utilities, components, and styles.
    - `src/widgets`: Complex UI components that combine multiple entities and features.

## Features

- Display match statistics including scores, player performance, and match details.
- Player performance analysis with detailed statistics.
- Leaderboards showing top players and teams.

## Prerequisites

- Node.js and npm installed on your machine.

## Getting Started

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/faceit-cs2-stats.git
   ```
2. Navigate to the project directory:
   ```sh
   cd faceit-cs2-stats
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Create a `.env` file in the root directory and add your API key:
   ```env
   REACT_APP_FACEIT_API_KEY=your_api_key_here
   ```
5. Start the development server:
   ```sh
   npm run dev
   ```

## Usage

- Open your browser and navigate to `http://localhost:5173`
- Enter the required information to fetch and display statistics
- Use the navigation menu to switch between different views like match list, player stats, and leaderboards

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Open a pull request

## License

This project is licensed under the MIT License.
