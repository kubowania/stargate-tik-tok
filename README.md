# STARGATE Tik-Tok App

## To start this app:
### `npm i`
This will install the packages you need

### fill out the `.env` file
Fill this out by signing up to [DataStax](XXX) and getting the information you need as per the `.env.sample` template.

### `npm install -g netlify-cli`
### `netlify dev`
This will run as if you deployed your app onto Netlify. It will also use your .env content. Treat it as a preview.



## Available Scripts

In the project directory, you can also run:
### `npm i`
This will install the packages you need

### fill out the `.env` file
Fill this out by signing up to [DataStax](XXX) and getting the information you need as per the `.env.sample` template.

Step 1:
### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

Step:2
### `start:lambda`

This will start your netlify functions in development mode and get the data you need for your app in step 1. Run along side step 1.\
Open [http://localhost:9000](http://localhost:39000) followed by the path to your Netlify functions, eg: [http://localhost:9000/.netlify/functions/addData](http://localhost:9000/.netlify/functions/addData) to view the data in the browser.\
IMPORTANT: .env content will not be picked up and you will have to import values such as ASTRA_DB_ID manually.



