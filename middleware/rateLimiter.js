const rateLimit = require('express-rate-limit');

const rateLimiter = rateLimit({
    windowMS: 1 * 60 * 1000,
    max: 10,
    message: 'Bonk 🔨',
});

module.exports = rateLimiter;