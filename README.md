# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# File Structure

    src
    ├── components          # Page view component
    ├── containers          # Page containers
    │   ├── action          # Actions for redux
    │   └── redcuer.ts      # Reducer for redux
    │
    ├── hooks               # Custom hooks
    ├── interface           # Common typescript interface for app
    ├── store               # Redux config
    ├── utils               # Tools and utilities
    ├── App.tsx             # Route and page layout
    ├── index.css           # Css reset
    ├── index.js            # Entry of react app
    └── theme.scss          # Color theme for app
