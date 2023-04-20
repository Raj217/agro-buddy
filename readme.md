# [AgroBuddy](https://agrobuddy.netlify.app)

AgroBuddy is an agrotech web app that provides users with details about different crops, including humidity, rainfall, temperature, and more. Users can sign up and search for different crops to get the details they need to make informed decisions about their agricultural practices.

## Installation

1. Clone the repository: `git clone https://github.com/Raj217/agro-buddy.git `
2. Inside both frontend and backend directory install dependencies: `npm install`
3. Set up the MongoDB database: AgroBuddy uses MongoDB to store information about different crops and their growing conditions. Follow the instructions in the [MongoDB documentation](https://docs.mongodb.com/manual/installation/) to install and set up MongoDB on your system.
4. Run the backend server using nodemon: `nodemon`
5. Run the frontend app: `npm run dev`

## Usage

1. Create an account or sign in to your existing account: Users can create an account using their email address.
2. Search for a crop using the search bar: Users can search for different crops using the search bar.
3. Click on the crop to see details about its optimal growing conditions: Users can click on a crop to see details about its optimal growing conditions, including humidity, rainfall, temperature, and more. The app uses data from the MongoDB database to provide users with accurate and up-to-date information about each crop.

## Technologies Used

- <strong>MongoDB</strong>: AgroBuddy uses a MongoDB database to store information about different crops and their growing conditions. The app uses the Mongoose library to interact with the MongoDB database.
- <strong>Python Scripts</strong>: Python script is used to add data from crops.xlsx dataset to the MongoDB database.
- <strong>Express</strong>: The Express framework is used to handle server-side requests and responses. The app uses the Passport library to handle user authentication.
- <strong>React</strong>: AgroBuddy uses React to create a dynamic user interface that allows users to search for and view details about different crops. The app uses the React Router library to handle client-side routing.
- <strong>Node.js</strong>: Node.js is used to build the server-side logic that handles database queries and serves data to the front-end. The app uses the Axios library to make HTTP requests to the server.
- <strong>Google Cloud Integration</strong>: The Google Analytics API is used to provide analytics for developers. The app uses the Google Analytics API to provide analytics for developers. AgroBuddy also has Google Login support for easy signup and login.
<!-- 
## Contributors

- [Insert your name and contact information]

## Acknowledgments

- [Insert acknowledgments for any resources, tutorials, or inspiration you used to build your app] -->
