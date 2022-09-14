// routes/api/activity.js

const express = require('express');
const router = express.Router();
const activitiesCtrl = require('../../controllers/api/activities');

router.post('/', activitiesCtrl.create);
router.put('/update/:id', activitiesCtrl.updateActivity);
router.get('/', activitiesCtrl.index);
router.delete('/:id', activitiesCtrl.delete);

module.exports = router;
