import { 
	takeEvery, 
	call,
	put 
} from "redux-saga/effects";
import axios from 'axios';
import FACEBOOK_API from '../Const/facebookApi.js';
import { 
	REQUEST_DATA, 
	LOAD_USERS, 
	LOADING_APP, 
	SET_USER, 
	SET_POSTS,
	SET_STORIES, 
	SET_COMMENTS,
	SET_MESSAGES, 
	SET_NOTIFICATIONS,
} from '../Const/action-types.js';

export default function* watcherSaga() {
	yield takeEvery(REQUEST_DATA, workerSaga);
}

function* workerSaga() {
	try {
		const userPayload = yield call(fetchAuthUser);
		console.log(userPayload)
		if (userPayload) {
			const usersPayload = yield call(fetchUsers);
			const postsPayload = yield call(fetchPosts);
			const storiesPayload = yield call(fetchStories);
			const commentsPayload = yield call(fetchComments);
			const messsagesPayload = yield call(fetchMessages)
			const notificationsPaypload = yield call(fetchNotifications)
			yield put({type: LOAD_USERS, payload: usersPayload});
		
			yield put({type: SET_POSTS, payload: postsPayload});
			yield put({type: SET_STORIES, payload: storiesPayload});
			yield put({type: SET_COMMENTS, payload: commentsPayload});
			yield put({type: SET_MESSAGES, payload: messsagesPayload});
			yield put({type: SET_NOTIFICATIONS, payload: notificationsPaypload})
		}
		yield put({type: SET_USER, payload: userPayload});
		yield put({type: LOADING_APP, payload: false});
	} catch (error) {
		yield put({type: LOADING_APP, payload: false});
		console.log(error.message);
	}
};

const fetchUsers= async () => {
	try {
		const usersResponse = await axios.get(`${FACEBOOK_API}users`, {withCredentials: true})
		const { data } = usersResponse;
		return data;	
	} catch (error){
		console.log(error.message);
	}
};

const fetchAuthUser = async () => {
	try {
		const userResponse = await axios.get(`${FACEBOOK_API}authuser`, {withCredentials: true});
		const { data } = userResponse;
		return data;
	} catch (error){
		console.log(error.message);	
	}
};

const fetchPosts = async () => {
	try {
		const postsResponse = await axios.get(`${FACEBOOK_API}retrieve/posts`)
		const { data } = postsResponse;
		return data;
	} catch (error) {
		console.log(error.message);
	}
};

const fetchStories = async () => {
	try {
		const storiesResponse = await axios.get(`${FACEBOOK_API}retrieve/stories`)
		const { data } = storiesResponse;
		return data;
	} catch (error) {
		console.log(error.message);
	}
}

const fetchComments = async () => {
	try {
		const commentsResponse = await axios.get(`${FACEBOOK_API}retrieve/comments`)
		const { data } = commentsResponse;
		return data;
	} catch (error) {
		console.log(error.message);
	}
};

const fetchMessages = async () => {
	try {
		const messsagesResponse = await axios.get(`${FACEBOOK_API}retrieve/messages`,{withCredentials: true})
		const { data } = messsagesResponse;
		return data;
	} catch (error) {
		console.log(error.message);
	}
};

const fetchNotifications = async () => {
	try {
		const notificationsResponse = await axios.get(`${FACEBOOK_API}retrieve/notifications`,{withCredentials: true})
		const { data } = notificationsResponse;
		return data;
	} catch (error) {
		console.log(error.message);
	}
};