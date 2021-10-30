import modifyDS from '../modify-DS/index.js';

const makeReel = (list) => {
	const modified = modifyDS(list);
	const mapped = modified.map((item) => (
		{
			user_id: item.user_id,
			user_avatar: item.user_stories[0].user_avatar,
			user_name: item.user_stories[0].user_name,
			story_img: item.user_stories[0].story_img,
		}
	))
	return mapped;
}

export default makeReel;