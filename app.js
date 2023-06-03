// Import the necessary modules
const readline = require('readline');
const { generateMeta } = require('./controllers/openaiController');

// Create a readline interface for user input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user for a YouTube video title and invoke the generateMeta function with the provided title
rl.question('YouTube Video Title: \n', generateMeta);
