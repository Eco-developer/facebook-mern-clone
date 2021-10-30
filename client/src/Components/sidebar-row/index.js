import Avatar from '../Avatar/index.js';

const SidebarRow = ({avatar=false, src=null, Icon=null, title='', onClick}) => {
	return (
		<div 
			className='sidebar-row d-flex align-items-center mt-2 mb-2 p-2'
			onClick={onClick}
		>
			{ avatar && <Avatar src={src} />}
			{ Icon && <Icon style={{color: '#2e81f4'}}/>  }
			<p className='m-0 ml-2'>{title}</p>
		</div>
	)
}
export default SidebarRow;