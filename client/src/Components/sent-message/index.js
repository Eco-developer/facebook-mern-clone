const SentMessage = ({active, Icon, color=''}) => (
	<div className={`p-absolute p-cover overflow-hidden ${color} ${active ? 'animated' : ''}`}>
		<div className='d-flex justify-content-center align-items-center w-100 h-fill'>
			<Icon className='text-white'/>
		</div>		
	</div>
)

export default SentMessage;