# Companies Directory

A modern, responsive web application for browsing and filtering a directory of companies. Built with React, TypeScript, and Vite.

## Features

- **Search Functionality**: Search companies by name in real-time
- **Filter by Industry**: Browse companies by their industry category
- **Filter by Location**: Filter companies by geographic location
- **Sort Options**: Sort companies alphabetically in ascending or descending order
- **Pagination**: Navigate through companies with intuitive pagination controls
- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop
- **Dark Mode Support**: Built-in dark mode support with automatic transitions
- **Loading State**: Skeleton loaders while data is being fetched
- **Error Handling**: User-friendly error messages

## Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Package Manager**: npm

## Project Structure

```
├── App.tsx                 # Main application component
├── index.tsx              # React entry point
├── index.html             # HTML template
├── types.ts               # TypeScript type definitions
├── vite.config.ts         # Vite configuration
├── components/
│   ├── CompanyCard.tsx    # Company card display component
│   ├── FilterBar.tsx      # Search and filter controls
│   ├── Pagination.tsx     # Pagination navigation
│   └── icons/
│       └── Icons.tsx      # SVG icon components
├── public/data/
│   └── companies.json     # Companies data source
└── services/
    └── companyService.ts  # Service for fetching company data
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Abbinavraam/Companies_Directory
cd companies-directory
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is busy).

### Build

Create a production build:
```bash
npm run build
```

### Preview

Preview the production build locally:
```bash
npm run preview
```

## Usage

1. **Search**: Use the search bar to find companies by name
2. **Filter by Industry**: Select an industry from the dropdown to filter results
3. **Filter by Location**: Select a location from the dropdown to filter results
4. **Sort**: Click the sort toggle to change between ascending and descending alphabetical order
5. **Reset Filters**: Click the "Reset Filters" button to clear all filters and search terms
6. **Navigate**: Use pagination controls at the bottom to browse through multiple pages

## Company Data

Companies are loaded from `data/companies.json`. Each company object contains:

- `id`: Unique identifier
- `name`: Company name
- `logoUrl`: URL to company logo
- `industry`: Industry category
- `location`: Geographic location
- `description`: Brief company description

## Components

### CompanyCard
Displays individual company information with logo, name, industry, location, and description.

### FilterBar
Provides search input, industry filter dropdown, location filter dropdown, sort toggle, and reset button.

### Pagination
Navigation component for browsing through multiple pages of results.

## Customization

- **Items Per Page**: Modify `ITEMS_PER_PAGE` constant in `App.tsx` (currently set to 9)
- **Styling**: Tailwind CSS classes are used throughout - customize in component files
- **Data Source**: Replace `data/companies.json` with your own data
- **Logo Images**: Update `logoUrl` in companies data to use different images

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary.

## Contributing

For questions or suggestions, please reach out to the development team.
