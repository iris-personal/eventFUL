import ActivityListItem from "../ActivityListItem/ActivityListItem";

export default function ActivityList({ activities, activity, day }) {
    if (!day) return null;
    // const activityListItems = activities.map((activity, index) => (
    //     <ActivityListItem activity={activity} key={index} index={index} day={day} />
    // ));
    const activityListItems = activities.filter((activity, index) => (
        activity.date === day && 
        <ActivityListItem activity={activity} key={index} index={index} day={day} />
    ));
    console.log(day);
    return (
        <div className="activity-card"> 
            {activity.date === day ?
                <div>
                    <h4>{day.month}/{day.day}/{day.year}'s Activities</h4>
                    <ul className="padding-0">{activityListItems}</ul>  
                </div>   
                :
                <h4>No Activities For {day.month}/{day.day}/{day.year} Yet!</h4> 
            }
        </div>
      );
    }
    