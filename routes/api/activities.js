// routes/api/activity.js

const express = require('express');
const router = express.Router();
const activitiesCtrl = require('../../controllers/api/activities');

// GET /api/activities
router.get('/', activitiesCtrl.index);
// POST /api/activities/create
router.post('/', activitiesCtrl.create);

module.exports = router;
