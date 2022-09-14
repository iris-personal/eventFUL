import { useEffect } from "react";
import * as activitiesAPI from "../../utilities/activities-api";
import ActivityListItem from "../ActivityListItem/ActivityListItem";

export default function ActivityList({ activities, deleteActivity }) {

    const activitiesList = activities && activities.map((activity, index) => <ActivityListItem activity={activity} deleteActivity={deleteActivity} />)
    return (
        <div className="activity-card"> 
            <div>
                <ul className="padding-0">{activitiesList}</ul>  
            </div>    
        </div>
      );
    }
    