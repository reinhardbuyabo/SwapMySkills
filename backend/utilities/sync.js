// sync.js
const sequelize = require('../config/db');
const User = require('../models/User');

sequelize.sync({ force: true }).then(() => {
    console.log('Database & tables created!');
});