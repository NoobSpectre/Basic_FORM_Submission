const express = require('express');
const { getSubmission, postSubmission } = require('../controllers/user');

const router = express.Router();

router.get('/', getSubmission);

router.post('/', postSubmission);

module.exports = router;
