import { Edit } from '@material-ui/icons';

const PostSettingEdit = ({onSetData}) => (
	<div 
		className='post-settings-edit d-flex align-items-center p-2 pl-3 cursor-pointer transition-4s-eio'
		onClick={onSetData}
	>
		<Edit className='text-info'/>
		<p className='m-0 ml-2 text_black'>
			Edit
		</p>
	</div>
)

export default PostSettingEdit;