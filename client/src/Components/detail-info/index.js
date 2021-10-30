
const DetailInfo = ({Icon, text}) => (
	<div className='pt-2 pb-2 d-flex align-items-center'>
		{Icon && <Icon className='text_black'/>}
		<p className='m-0 ml-2 text_black'>{text}</p>
	</div>
)

export default DetailInfo;