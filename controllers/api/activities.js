const Activity = require("../../models/activity");

module.exports = {
    index,
    create
}

async function index(req, res) {
    const activities = await Activity.find({user: req.user._id}).sort('date');
    res.json(activities);
}

async function create(req, res) {
   req.body.user = req.user._id; 
   const activity = await Activity.create(req.body);
   res.json(activity);
}