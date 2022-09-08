import sendRequest from "./send-request";

const BASE_URL = "/api/activities";

export function getAll() {
    return sendRequest(`${BASE_URL}`);
}

export function addOne(activityData) {
    return sendRequest(`${BASE_URL}`, "POST", activityData);
}