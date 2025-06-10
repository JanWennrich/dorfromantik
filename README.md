# Dorfromantik Score Calculator

A clean, minimalist web application for calculating and tracking scores in the popular game Dorfromantik.

## Features

- Track scores for different task types (Crown, Tree, Wheat, House, Bridge, Water)
- Record flag scores
- Track unlocked special items with their respective point values
- Calculate total score automatically
- Save player names and date
- Responsive design that works on both desktop and mobile devices

## Live Demo

Visit the live application: [Dorfromantik Score Calculator](https://janwennrich.github.io/dorfromantik)

## Technology Stack

- React 19
- Modern JavaScript (ES6+)
- CSS Grid and Flexbox for responsive layouts
- GitHub Actions for CI/CD
- GitHub Pages for hosting

## Development

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/janwennrich/dorfromantik.git
cd dorfromantik
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Deployment

The project is set up with GitHub Actions to automatically deploy to GitHub Pages when changes are pushed to the main branch. The workflow configuration can be found in `.github/workflows/deploy.yml`.

## How to Use

1. Enter scores for each task type in the respective input fields
2. Enter flag scores in the flag row
3. Check the boxes for any unlocked special items and enter their point values
4. Enter player names in the bottom section
5. The total score is calculated automatically and displayed at the bottom

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## About the Game

Dorfromantik is a peaceful building strategy and puzzle game developed by Toukana Interactive. This calculator is a fan project and is not officially affiliated with the game or its developers.

## Author

Created by [Jan Wennrich](https://janwennrich.github.io/)
