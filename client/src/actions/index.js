import { 
	UPDATE_USER_DATA, 
	DEFAULT_USER_DATA, 
	REQUEST_DATA, 
	SET_USER, 
	SET_HEADER, 
	SET_EXPANDED_POST,
	SET_EXPANDED_STORY,
	UPDATE_EXPANDED_POST, 
	SET_DEFAULT_HEADER,
	SET_RE_POST,
	SET_RESIPIENT_TARGET,
	LOADING_PROFILE,
	DELETE_STORY
} from '../Const/action-types.js';

export function updateUserData(payload) {
	return { type: UPDATE_USER_DATA, payload };
}

export function setUser(payload) {
	return { type: SET_USER, payload };
}

export function setHeader(payload) {
	return { type: SET_HEADER, payload };
}
export function setDefaultHeader() {
	return { type: SET_DEFAULT_HEADER };
}

export function setExpandedPost(payload) {
	return { type: SET_EXPANDED_POST, payload };
}

export function setExpandedStory(payload) {
	return { type: SET_EXPANDED_STORY, payload };
}

export function updateExpandedPost(payload) {
	return { type: UPDATE_EXPANDED_POST, payload };
}

export function setRePost(payload) {
	return { type: SET_RE_POST, payload };
}

export function setResipientTarget(payload) {
	return { type: SET_RESIPIENT_TARGET, payload };
}

export function setDefaultData() {
	return { type: DEFAULT_USER_DATA };
}

export function requestData() {
	return { type: REQUEST_DATA };
}

export function setLoadingProfile(payload) {
	return { type: LOADING_PROFILE, payload };
}

export function deleteStory(payload) {
	return{ type: DELETE_STORY, payload }
}