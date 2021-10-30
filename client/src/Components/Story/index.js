import Avatar from '../Avatar/index.js';
import Image from '../Image/index.js';

const Story = ({bgSrc, avatarSrc, Extension, name='', onClick}) => {
	return (
		<div 
			className='story mr-3'
			onClick={onClick}
		>
			<Image src={bgSrc} alt="img-bg"/>
			{avatarSrc && 
				<div className='story-user d-flex h-fill flex-column justify-content-between p-2'>
					<Avatar src={avatarSrc} />
					<p className='text-white m-0'>{name}</p>
				</div>}
		</div>
	)
}

export default Story;