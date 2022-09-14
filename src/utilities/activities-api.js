import sendRequest from "./send-request";

const BASE_URL = "/api/activities";

export function getAll() {
    return sendRequest(`${BASE_URL}`);
}

export function addOne(activityData) {
    return sendRequest(`${BASE_URL}`, "POST", activityData);
}

export function deleteActivity(activityId) {
    return sendRequest(`${BASE_URL}/${activityId}`, "DELETE");
}

export function updateActivity(activityId, activityData) {
    return sendRequest(`${BASE_URL}/update/${activityId}`, "PUT", activityData);
}