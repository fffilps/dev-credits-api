const router = require('express').Router();

const devCredits = require('../model/model.js');
const getCredits = require('../controllers/getCredits.js');
const postCredits = require('../controllers/postCredits.js');

router.get('/get/:id', getCredits);

router.post('/post', postCredits);

module.exports = router;
