import { useEffect } from "react";
import * as activitiesAPI from "../../utilities/activities-api";
import ActivityListItem from "../ActivityListItem/ActivityListItem";

export default function ActivityList({ activities, deleteActivity, selectedDay }) {

    const activitiesList = activities && activities.map((activity, index) => <ActivityListItem activity={activity} deleteActivity={deleteActivity} key={index} />)
    return (
        <div className="activity-card"> 
            <div>
                <h3>Your Activity's</h3>
                <ul className="padding-0">{activitiesList}</ul> 
            </div>    
        </div>
      );
    }
    