const Activity = require("../../models/activity");

module.exports = {
    index,
    create,
    delete: deleteActivity,
    updateActivity
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

async function deleteActivity(req, res) {
    await Activity.findByIdAndDelete(req.params.id);
    res.json('deleted');
}

async function updateActivity(req, res) {
        await Activity.findByIdAndUpdate(
            { _id: req.params.id }, 
            req.body,
        )
        const activity = await Activity.find({
            user: req.user._id
        });
        res.json(activity);
}