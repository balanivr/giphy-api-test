# GIPHY API Test

This project demonstrates search using the [GIPHY Search API](https://developers.giphy.com/docs/api#quick-start-guide) in React. The project relies on the libraries highlighted under `dependencies` below, and requires an API key. Please read this entire document before attempting to run this project. A demo of the project may be viewed at:
[https://vikeshcodes.com/giphy](https://vikeshcodes.com/giphy)

## Dependencies

The project can by run on any server (by running the `npm run build` command; more details below) or locally. However, in order to run the project the project, you will have to:
- set up your API key
- install the dependent libraries

Each of these is explained below.

### GIPHY API Key

The project will compile but fail to run without first placing an API key in the right file. To generate a file, visit the link below and create an account:
[https://developers.giphy.com/dashboard/?create=true](https://developers.giphy.com/dashboard/?create=true)

**Note that this project makes use of the API Key, not the SDK Key**

Follow the steps below once you have generated your key:
- Navigate to the root directory of this project
- Create a file named `.env` in the root directory (if it doesn't already exist)
- Add the following line to the `.env` file:
REACT_APP_GIPHY_KEY=################################

(Replace the hash tags with your API key)
Note that you will have to restart the server if you already have it running every time to modify the `.env` file. 

### Dependent Libraries

The following dependencies will have to be installed in order to run the project:
- [@material-ui/core](https://www.npmjs.com/package/@material-ui/core): Used for UI Elements
- [@material-ui/icons](https://www.npmjs.com/package/@material-ui/icons): Used for search and back icon
- [axios](https://www.npmjs.com/package/axios): Used to make REST calls to the GIPHY server

Additionally, the following were bundled in as part of the `create-react-app` command:
- react
- react-dom
- react-scripts

**Note: Material-UI is an open-source library that provides the building blocks to put together a react app. It is based off of Google's Material Design(https://material.io/) (though not endorsed by Google) and provides helpers for responsiveness and extending base components**

## Using the Application

The application can be deployed to a server or run on your local machine. `cd` into the directory of your project and run either of the commands below to see the application is action.

### `npm start`

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. The version deployed at [https://vikeshcodes.com/giphy](https://vikeshcodes.com/giphy) was built using this command.

## Additional Commands

### `npm test`

Launches the test runner in the interactive watch mode. No custom tests were written for this project. Running this command will run the test that comes bundled in with any application creating using the `create-react-app` command.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into the project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature.

## Additional Details

For additional details, feel free to shoot an E-Mail to vikesh@beyondthebyte.com. I'd be glad to help in any way I can.<br>
Please bear in mind that I'm working on several projects at any given time, so I might take a few days to write back to you.

You may visit [my portfolio](https://vikeshcodes.com/) to learn more about me and my work.<br>
If you're hesitant about coding, remember: Coding is more of an art than a science. The goal is the plot, the variables are the characters and you are God, writing their story. Break the code if you have to in order to understand why it was there in the first place. Everyone, even Gods, start somewhere.