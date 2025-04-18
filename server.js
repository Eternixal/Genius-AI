const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files (frontend)
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to handle contact form submission
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        // Read existing contacts or initialize empty array
        let contacts = [];
        try {
            const data = await fs.readFile('contacts.json', 'utf8');
            contacts = JSON.parse(data);
        } catch (error) {
            // File doesn't exist yet, start with empty array
        }

        // Add new contact
        contacts.push({
            id: contacts.length + 1,
            name,
            email,
            message,
            timestamp: new Date().toISOString()
        });

        // Save to contacts.json
        await fs.writeFile('contacts.json', JSON.stringify(contacts, null, 2));

        res.status(200).json({ message: 'Contact saved successfully' });
    } catch (error) {
        console.error('Error saving contact:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
