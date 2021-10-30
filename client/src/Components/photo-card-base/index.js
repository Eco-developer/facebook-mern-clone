import Image from '../Image/index.js';

const PhotoCardBase = ({size, photo=null, InnerComponent=null, onClick, onClickImage, onClickComponent, Icon=null}) => (
	<div 
		className={`background-image cursor-pointer p-2 ${size}`}
		onClick={onClick}
	>
		{photo && 
			<Image
				className='rounded'
				src={photo.postUrl}
				onClick={onClickImage}
			/>
		}
		{InnerComponent && 
			<InnerComponent 
				photo={photo}
				onClick={onClickComponent}
			/>
		}
		{Icon && <Icon/>}
	</div>
)

export default PhotoCardBase;