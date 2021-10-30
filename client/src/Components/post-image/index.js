import Image from '../Image/index.js';

const PostImage = ({src, extend='', imgClassNames='', onClick}) => (
	<div
		className={`d-flex justify-content-center bg-dark ${extend}`}
		onClick={onClick}
	>
		<Image
			className={imgClassNames}
			src={src}
		/>
	</div>
)

export default PostImage;