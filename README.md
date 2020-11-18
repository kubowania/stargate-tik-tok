# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To start this app:
### `npm i`

This will install the packages you need

### ``npm install -g netlify-cli`
### `netlify dev`
This will run as if you deployed your app onto Netlify. It will also use your .env content. Treat it as a preview.



## Available Scripts

In the project directory, you can also run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `start:lambda`

This will start your netlify functions in development mode and get the data you need from your app. Open [http://localhost:9000](http://localhost:39000) followed by the path to your Netlify functions, eg: [http://localhost:9000/.netlify/functions/addData](http://localhost:9000/.netlify/functions/addData) to view the data in the browser.
IMPORTANT: .env content will not be picked up and you will have to import values such as ASTRA_DB_ID manually.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


