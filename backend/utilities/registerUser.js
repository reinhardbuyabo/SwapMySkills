const fetch = require('node-fetch');

// Function to register a user
const registerUser = async (userData) => {
    const apiEndpoint = 'http://localhost:4000/api/v1/users'; // Adjust the endpoint as necessary

    try {
        const response = await fetch(apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error(`Failed to register user: ${response.statusText}`);
        }

        const data = await response.json();
        console.log('User registered successfully:', data);
        return data;
    } catch (error) {
        console.error('Error registering user:', error.message);
        throw error;
    }
};

const uniqueEmail = `test+${Date.now()}@example.com`;
// call the function
registerUser({
    name: 'Test User',
    email: uniqueEmail,
    password: 'password123'
});

module.exports = registerUser;