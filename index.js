const express = require('express');
const { validateRegistration } = require('./middleware/validator');

const app = express();
const PORT = 3000;

app.use(express.json());


app.post('/register', validateRegistration, (req, res) => {
    // Step 6: Functional Testing - This block only runs if validation passes
    res.status(201).json({
        success: true,
        message: "User registered successfully!",
        user: {
            name: req.body.name,
            email: req.body.email
        }
    });
});

app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});