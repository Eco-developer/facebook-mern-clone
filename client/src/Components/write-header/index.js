import Avatar  from '../Avatar/index.js';

const WriteHeader = ({src, name, uid}) => (
	<div className='d-flex align-items-center mb-3 flex-grow-1'>
		<Avatar 
			src={src}
			trigger={true}
			uid={uid}
		/>
		<h5 className='m-0 ml-2'>{name}</h5>
	</div>
)

export default WriteHeader;