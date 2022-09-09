import ActivityListItem from "../ActivityListItem/ActivityListItem";

export default function ActivityList({ activities, activity, day }) {
    const activityListItems = activities.map((activity, index) => (
        <ActivityListItem activity={activity} key={index} index={index} day={day} />
      ));
      return (
        <div className="activity-card"> 
            <h4>{day.month}/{day.day}/{day.year}'s Activities</h4>
            <ul className="padding-0">{activityListItems}</ul>;
        </div>
      );
    }
    