# workflow

Multi step form that guides the user through checkout process and collects data using GitHub's API.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Tech Stack

    Vue 2
    Vue Router
    Vuex
    JavaScript
    Vee Validate
    SCSS
    Semantic HTML
    Axios

## Description

For detailed documentation please visit - https://v2.vuejs.org/

The structure of the project is:

    Assets: Contains the scss files - variables and mixins that are collectively imported in app.scss
    Components: IntroSlide, StepOne, StepTwo, FormFooter which is a shared child component of the previous 3 and EndSlide.
    Router: Router folder contains index.js file that defines all the routes of the application which will render the respective    component when we use routes to switch the view.
    Store: Store folder contains app.js which handles all the state of the application, mutations to track state changes and actions to handle api calls.

Vuex is used as the state management library which helps to maintain the form field values throughtout the process.
For detailed documentation, please visit - https://v3.vuex.vuejs.org/ which works with Vue 2.

Vue Router makes it easy to go back and forth with the multi step form by using the browser's back and next buttons.
For detailed documentation, please visit - https://v3.router.vuejs.org/ which works with Vue 2.

GitHub API consumption is handled through Axios. (API used - https://docs.github.com/en/rest/users)

Vee-validate allow to validate every field of the forms and provide clear errors to the user. Every step is correctly validated before the Next/Finish button is enabled.
For detailed documentation, please visit - https://vee-validate.logaretm.com/v3 which works with Vue 2

If username exists the GitHub data panel will be shown in the final view. Otherwise a text that states User not found will be shown.

main.js file handle all the exports which allows us to use it throughout the application.

Transition property of Vue is used to provide transition animations when user go to previous/next step.
