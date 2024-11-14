const bcrypt = require('bcryptjs');
// userController.js
const User = require('../models/User');

// Get all users
async function getAllUsers(req, res) {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// Get a user by ID
async function getUserById(req, res) {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// @route   POST /api/v1/users
// @desc    Register new user ✅
// @access  Public
const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // 1. Validate the request
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Please enter all fields' });
        }

        console.log('name:', name);
        console.log('email:', email);
        console.log('password:', password);

        // 2. Check if the user already exists
        const userExists = await User.findOne({ where: { email } });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // 3. Hash the password
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        if (!passwordHash) {
            return res.status(400).json({ message: 'Invalid password' });
        } else {
            // 4. Create the user
            const user = await User.create({
                name,
                email,
                password_hash: passwordHash
            });

            console.log('User created:', user);
            res.status(201).json(user);
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

// @route   POST /api/v1/users/login
// @desc    Login user ✅
// @access  Public
const loginUser = async (req, res) => {
    try {
        // 1. Get the email and password from the request
        const { email, password } = req.body;

        // 2. Validate the request
        if (!email || !password) {
            return res.status(400).json({ message: 'Please enter all fields' });
        }

        // 3. Check if the user exists
        const user = await User.findOne({ where: { email } });

        // 4. Check if the user exists and the password is correct
        if (user && (await bcrypt.compare(password, user.password_hash))) {
            console.log('Login successful', user);
            res.json({
                id: user.id,
                name: user.name,
                email: user.email
            });
        } else {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// Update a user
async function updateUser(req, res) {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            await user.update(req.body);
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

// Delete a user
async function deleteUser(req, res) {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            await user.destroy();
            res.json({ message: 'User deleted' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    createUser,
    loginUser,
};