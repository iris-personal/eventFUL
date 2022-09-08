const Activity = require("../models/activity");

module.exports = {
    index,
    create
}

function index(req, res) {
    const activities = Activity.find({user: req.user._id}).sort('date');
    res.json(activities);
}

function create(req, res) {
   req.body.user = req.user._id; 
   const activity = Activity.create(req.body);
   res.json(activity);
}