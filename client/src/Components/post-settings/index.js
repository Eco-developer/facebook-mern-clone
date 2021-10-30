import PostSettingEdit from '../post-settings-edit/index.js';
import PostSettingDelete from '../post-settings-delete/index.js';
import DeleteBox from '../delete-box/index.js';
import EditPost from '../edit-post/index.js';
import { PostLoyout } from '../Loyouts/index.js';
import { useState } from 'react';

const PostSettings = ({data}) => {
	const [toggleDelete, setToggleDelete] = useState(false);
	const [editData, setEditData] = useState(null);

	const handleToggleDelete = () => {
		setToggleDelete(!toggleDelete);
	};
	
	const onSetData = () => {
		setEditData(data);
	};

	const onClose = () => {
		setEditData(null);
	};
	
	return (
		<>
			<PostLoyout 
				extend='p-absolute post-settings'
				mnres={false}
			>
				<PostSettingEdit onSetData={onSetData}/>
				<PostSettingDelete handleToggleDelete={handleToggleDelete}/>
			</PostLoyout>
			{toggleDelete &&		
				<DeleteBox
					id={data.postId}
					setClose={handleToggleDelete}
				/>
			}
			{editData && editData.postUrl ?
				<EditPost
					data={editData}
					onClose={onClose}
				/> : null
			}
		</>
	)
}

export default PostSettings;