# online-exam-app

This project is developed into a [Material UI](https://material-ui.com/) by the myself [Abdul Halith](abd.halith994@gmail.com) for Online Exam Application to evaluate candidates.

## Folder Structure (/src)

- `/components` : Collection of all components and all the components need to be exposed via index.js only.

- `/contexts` : Collection of all Contexts used all over the app.

- `/graphql` : Graphql Setups, `index.js` contain the client setup, `queries.js,mutation.js and subscription.js` contains the graphql quries used in the application.

- `/networkcall`: It contains the function which is used for all the network call. i.e To hit API it check : Internet Connection, Proper URL, Proper Payload before the network call. We use [Axios](https://www.npmjs.com/package/axios) for all the network call.

- `/routers` : It contains the `index.js` file where all the routing are defined. The `route.js` file contain all the routes used all over the application. The `private_router.js` contains the private router for protected routes.

- `/screens` : It contain all the screens (typically all the components are built togethere here) in the app is defined here.

- `/themes` : Contains all the [Theme JSON's](https://material-ui.com/customization/default-theme/) (default.json,darktheme.json) we want to use the thoroughout the app. Use this [Material UI Theme Generator](https://in-your-saas.github.io/material-ui-theme-editor/) for creating new themes.

- `/utils` : All the common functions,constants are defined in the `index.js` of the folder.

## Before you start

Don't forgot to create you local environment file (.env.local) and all the environment variables are described in the [env_struct] file

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

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
