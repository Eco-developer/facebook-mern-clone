import TimeAgo from 'react-timeago';

const Message = ({isCurrentUser, text, timestamp}) => (
	<div className={`d-flex ${isCurrentUser ? 'justify-content-end pl-3' : 'justify-content-start pr-3'}`}>
		<div 
			className={`p-2 d-flex flex-column mt-1 mb-2 rounded-10 fit-content shadow-sm ${isCurrentUser ? 'bg-darkblue' : 'bg-white'}`}
		>
			<div className='fit-content'>
				<p className={`m-0 ${isCurrentUser ? 'text-white' : ' text_black'}`}>{text}</p>
			</div>
			<small className={`flex-grow-1 d-flex ${isCurrentUser ? 'justify-content-end' : ''}`}>
				<TimeAgo 
					className={`m-0 mt-1 fit-content ${isCurrentUser ? 'text-white' : ' text_black'}`}
					date={timestamp}
					live={true}
				/>
			</small>
		</div>
	</div>
)

export default Message;