## StarWars App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project is deployed with [netify.com](https://www.netlify.com/) here: https://cocky-edison-1ff982.netlify.com/
Username: demo@st6.io
Password: demo1234

# Project set up

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run coverage`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://create-react-app.dev/docs/running-tests/) for more information.

### `npm run format`

Launches the prettier addon runner in the interactive watch mode.<br />
Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.<br />
See the section about [running tests](https://github.com/prettier/prettier) for more information.

## Huskey set up

### `pre-commit` hook integration

* Hook is triggered automatically on git commit interaction in the terminal. Hook run commit-check script which launches all linter rules runner and prettier runner.

### `pre-push` hook integration

* Hook is triggered automatically on git push interaction in the terminal. Hook run push-check script which launches all tests.

## Naming Conventions

- **Component Naming**

  All base components should be created as pods:

  Example:
  ```
  components/CardCharacter/
  |- CardCharacter.js
  |- CardCharacter.module.scss
  |- CardCharacter.test.js
  ```

## API Resources

* [Star Wars API](https://swapp.st6.io/graphql)

## Useful Tools

* Linting extension
  * [ESlint](https://github.com/eslint/eslint)

* Development Browser Extensions
  * [Apollo Client Developer Tools](https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm)

## Developers Best Friends

* [Frequent git mistakes](https://ohshitgit.com)
