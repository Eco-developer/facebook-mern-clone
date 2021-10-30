import NotificationIcon from '../../Components/notification-icon/index.js';
import * as TYPES from '../../Const/notification-types.js';
import {
	AccountCircle,
	Comment,
	Notifications,
	Instagram
} from '@material-ui/icons';

export function handleDescription(type, username, target) {
	switch(type) {
		case TYPES.MAKE_POST: {
			return `${username} has made a post`;
		}
		case TYPES.REPOST: {
			return `${username} has shared ${target}'s post`;
		}
		case TYPES.MAKE_COMMENT: {
			return `${username} made a comment in ${target}'s post`;
		}
		case TYPES.MAKE_REPLAY: {
			return `${username} replied to a comment in ${target}'s post`;
		}
		case TYPES.CHANGE_PROFILE_PICTURE: {
			return `${username} has changed the profile picture`;
		}
		case TYPES.ADD_PHOTO: {
			return `${username} added a photo`;
		}
		case TYPES.MAKE_STORY: {
			return `${username} has posted a story`;
		}
		default:
			return null;
	}
}

export function handleIcon(type) {
	switch(type) {
		case TYPES.MAKE_POST: {
			return (
				<NotificationIcon
					color='bg-primary'
					Icon={Notifications}
				/>
			)
		}
		case TYPES.REPOST: {
			return (
				<NotificationIcon
					color='bg-info'
					Icon={Notifications}
				/>
			)
		}
		case TYPES.MAKE_COMMENT:
		case TYPES.MAKE_REPLAY: {
			return (
				<NotificationIcon
					color='bg-success'
					Icon={Comment}
				/>
			)
		}
		case TYPES.CHANGE_PROFILE_PICTURE: {
			return (
				<NotificationIcon
					color='bg-orange'
					Icon={AccountCircle}
				/>
			)
		}
		case TYPES.ADD_PHOTO: {
			return (
				<NotificationIcon
					color='bg-orange'
					Icon={Instagram}
				/>
			)
		}
		case TYPES.MAKE_STORY: {
			return (
				<NotificationIcon
					color='bg-warning'
					Icon={Instagram}
				/>
			)
		}
		default:
			return null;
	}
}

export function handleNotifications(list, uid) {
	const sorted = list.sort((a, b) =>  a.timestamp < b.timestamp ? 1 : -1)
	return sorted;
}