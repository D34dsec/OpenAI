// Import the OpenAI configuration module
const openai = require('../config/openaiConfig');

// Function to generate meta information for a YouTube video
const generateMeta = async (title) => {
    // Generate a description for the YouTube video
    const description = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: 'user',
                content: `Come up with a description for a YouTube video called ${title}`
            }
        ],
        max_tokens: 100
    });

    // Log the generated description to the console
    console.log(description.data.choices[0].message);

    // Generate 10 keywords for the YouTube video
    const tags = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: 'user',
                content: `Come up with 10 keywords for a YouTube video called ${title}`
            }
        ],
        max_tokens: 100
    });

    // Log the generated keywords to the console
    console.log(tags.data.choices[0].message);
};

// Export the generateMeta function to make it accessible to other modules
module.exports = { generateMeta };