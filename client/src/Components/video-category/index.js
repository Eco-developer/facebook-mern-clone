import Flag from '../flag/index.js';
import { useFeedPeopleState } from '../../hooks/index.js';

const VideoCategory = ({category, query='', Icon=null, flag=null}) => {
	const {
		state: {
			search: { searchKey }
		},
		dispatch
	} = useFeedPeopleState();

	const onClick = () => {
		if (query !== searchKey) {
			dispatch({
				type: 'SET_SEARCHKEY',
				payload: query,
			});
		}
	};

	return (
		<div 
			className={`chat-resipient p-2 mt-1 mb-1 cursor-pointer d-flex align-items-center ${searchKey === query ? 'bg-lightblue' : 'bg-whitesmoke'}`}
			onClick={onClick}
		>
			{Icon ? 
				<div 
					className={`rounded-circle p-2 d-flex align-items-center justify-content-center rounded-circle ${searchKey === query ? 'bg-primary' : 'bg-secondary'}`}
				>
					<Icon 
						className={`${searchKey === query ? 'text-white' : 'text_black'}`}
					/>
				</div>
			: null}
			{flag ? 
				<Flag
					src={flag} 
					alt={category}
				/>
			: null}
			<h6 className='ml-2 m-0 text_black'>
				{category}
			</h6>
		</div>
	)
}

export default VideoCategory;