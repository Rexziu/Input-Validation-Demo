
const validateRegistration = (req, res, next) => {
    const { name, email, password } = req.body;
    const errors = [];


    if (!name || !email || !password) {
        errors.push("Missing required fields: name, email, and password are all required.");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
        errors.push("Invalid email format.");
    }

    if (password && password.length < 8) {
        errors.push("Password must be at least 8 characters long.");
    }

    if (errors.length > 0) {
        return res.status(400).json({
            success: false,
            message: "Invalid input data",
            errors: errors
        });
    }

    next();
};

module.exports = { validateRegistration };