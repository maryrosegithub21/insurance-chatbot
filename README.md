# Insurance Chatbot

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


This React component ChatBot serves as an AI insurance policy assistant. Users can interact with the chatbot by typing messages and receiving responses. The chatbot also provides options for the user to select.

Installation
Clone the repository.
Install dependencies using npm install.
Start the development server with npm start.
Usage
The chatbot interface consists of a chat window where messages are displayed.
Users can type messages in the input field and submit them by clicking the "Submit" button.
If the chatbot provides options in the form of buttons, users can click on the buttons to select an option.
Features
Message Display: Messages from both the user and the chatbot are displayed in the chat window.
User Input: Users can type messages in the input field and submit them to the chatbot.
Options Selection: If the chatbot presents options as buttons, users can click on the buttons to interact further.
Components
ChatBot: The main component that handles the chat interface and communication with the AI backend.
Functions
handleSubmit: Handles the submission of user messages. It sends the message to the AI backend and displays the response.
handleOptionClick: Handles the selection of options presented by the chatbot. It sends the selected option to the AI backend and displays the response.
Dependencies
React: Used for building the user interface.
useState: Hook for managing component state.
fetch: Used for making asynchronous requests to the AI backend.
Styling
The component uses a CSS file ChatBot.css for styling the chat interface.
Environment Variables
The component uses REACT_APP_API_URL environment variable to determine the API endpoint for communicating with the AI backend.
Error Handling
Errors that occur during communication with the AI backend are logged to the console, and a generic error message is displayed to the user.
Note
Ensure to set the REACT_APP_API_URL environment variable to the appropriate API endpoint before running the application.