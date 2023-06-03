// Import the necessary modules from the 'openai' package
const { Configuration, OpenAIApi } = require("openai");
// Import the 'dotenv' package to load environment variables from a file
require('dotenv').config();

// Create a new Configuration instance with the OpenAI API key from the environment variables
const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY
});

// Create a new OpenAIApi instance with the provided configuration
const openai = new OpenAIApi(configuration);

// Export the 'openai' object to make it accessible in other modules
module.exports = openai;
