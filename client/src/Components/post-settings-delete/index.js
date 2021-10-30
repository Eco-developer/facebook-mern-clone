import { Delete } from '@material-ui/icons';

const PostSettingDelete = ({handleToggleDelete}) => (
	<div 
		className='post-settings-delete d-flex align-items-center p-2 pl-3 cursor-pointer transition-4s-eio'
		onClick={handleToggleDelete}
	>
		<Delete className='text-danger'/>
		<p className='m-0 ml-2 text_black'>
			Delete
		</p>
	</div>
)


export default PostSettingDelete;