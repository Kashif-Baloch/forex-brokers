# CelestialFX - Premium Forex Brokerage Website

A professional, high-performance Forex Brokerage website built with React, Tailwind CSS, and Node.js.

## Features

- **Premium Design**: "Celestial Prosperity" theme with dark blue, gold, and white color palette.
- **Responsive Layout**: Fully responsive design for mobile, tablet, and desktop.
- **7 Complete Pages**:
  - Home (Hero, Features, Testimonials)
  - About Us (Mission, Vision, Regulatory)
  - Account Types (Comparison Table)
  - Instruments (Forex, Indices, Commodities, Crypto)
  - Deposit & Withdrawal (Payment Methods)
  - IB & Affiliates (Partnership Program)
  - Contact Us (Form & Info)
- **API Routes**: Sample backend endpoints for fetching data.
- **Modern Tech Stack**: React 19, Tailwind CSS 4, Express.js.

## Installation

1.  **Clone the repository** (if applicable) or extract the project files.
2.  **Install dependencies**:
    ```bash
    npm install
    ```

## Running the Project

### Development Mode
To start the development server with hot-reload:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
To build the project for production:
```bash
npm run build
```

To start the production server:
```bash
npm start
```

## Project Structure

- `client/src/pages`: Individual page components.
- `client/src/components`: Reusable UI components.
- `client/src/components/layout`: Header, Footer, and Layout wrapper.
- `server/routes.ts`: API route definitions.
- `client/src/index.css`: Global styles and Tailwind theme configuration.

## Customization

- **Theme**: Edit `client/src/index.css` to change color variables.
- **Content**: Update text content in respective page files in `client/src/pages`.
- **API**: Modify `server/routes.ts` to connect to a real database or external API.
