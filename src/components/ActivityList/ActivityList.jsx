import ActivityListItem from "../ActivityListItem/ActivityListItem";

export default function ActivityList({ activities, activity }) {
    const activityListItems = activities.map((activity, index) => (
        <ActivityListItem activity={activity} key={index} index={index} />
      ));
      return (
        <div className="activity-card"> 
            <ul className="padding-0">{activityListItems}</ul>;
        </div>
      );
    }
    