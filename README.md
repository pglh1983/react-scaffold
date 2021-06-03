__Note:__ This repo is even older than the TypeScipt one - as such it doesn't represent my current thinking or use current APIs. As with the TS one, it needs updating to use Storybook 6, DocsPage etc etc..... or maybe just ignore this in favour of the TS version ;)

# Peter's React Scaffold

This repository exists as a bare-bones React app that does nothing, but integrates a bunch of stuff I'm probably going to need. It includes:

* React, React DOM
* Linting with `eslint-airbnb`
* `pre-commit` to enforce the linter
* Testing with Jest, with test files at `**/*.spec.js`, `**/*.spec.jsx`
* React, Babel and ESLint integration for Jest
* Storybook, with story files at `**/*.stories.jsx`
* Emotion, with styled components and correctly-configured Babel
* Prop-Types
* Bundling with Parcel rather than Webpack
* `.editorconfig` setup

The intention of my configuration is to keep the components super modular and independent, so that the component, styles, stories and tests can be kept in one directory, for example:

    src/
      components/
        atoms/
          Button/
            Button.jsx
            Button.spec.jsx
            Button.stories.jsx
            Button.style.js
          Input/
            ...
        molecules/
          ...

Normally I would separate the styleguide and the app itself into two projects, and have the app require components exported from the styleguide as a dependency. However, this configuration lends itself well to smaller projects, and is very easy to split into two.

In the `master` branch there is no state management. For projects that require state management, clone from the `redux` branch which includes `redux` and `redux-saga` with some boilerplate.

## Installation

This project is not available as an NPM module because it is intended to be used as a starting point for a React project, rather than a dependency. To use this project, clone or download this git repo and start making changes!

This project requires a fairly new version of Node. 12.x is sufficient, 8.x is not.

Other than that, all that is required to install the dependencies is:

    npm ci

## How to run

To build the app in dev mode into `output/dev` and run the app in dev mode on port 1234:

    npm run start

To build the app in production mode into `output/production`:

    npm run build

### Testing

To run the test suite:

    npm run test

### Linting

To run a linting report:

    npm run lint

To have the linter fix linting errors where possible:

    npm run lint:fix

### Styleguide

You can run the styleguide on localhost port 9001 with:

    npm run styleguide

To build the styleguide statically into `output/styleguide` run:

    npm run styleguide:build

## Contact

For any questions or comments please contact me via GitHub.
