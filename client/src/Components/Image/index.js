import FACEBOOK_API from '../../Const/facebookApi.js';

const Image = ({src=null, className='', defaultImage=null, alt='facebook-image', onClick}) => (
	<img 
		src={src ? `${FACEBOOK_API}retrieve/images/single?name=${src}` : defaultImage} 
		className={className} 
		alt={alt}
		onClick={onClick}
	/>
)

export default Image;