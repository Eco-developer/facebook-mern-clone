import PostVideo from '../post-video/index.js';
import axios from 'axios';
import * as API from '../../Const/youtubeApi.js';
import { FeedSubLayout } from '../Loyouts/index.js';
import { 
	useEffect,
	useState
} from 'react';
import { useFeedPeopleState } from '../../hooks/index.js';
import { v4 as uuid } from 'uuid';

const VideosMain = () =>{
	const {
		state: {
			search: { searchKey }
		}
	} = useFeedPeopleState();

	const [videos, setVideos] = useState([]);
	useEffect(()=> {
		const fetchApi = async () => {
			try {
				const response = await axios.get(`${API.BASE_URL}?part=${API.PART}&maxResults=${API.MAXRESULTS}&order=${API.ORDER}&safeSearch=${API.SAFE}&q=${searchKey}&key=${API.KEY}`);
				const { data: { items } } = response;
				const ids = items.map(item => item.id.videoId);
				setVideos(ids);
			} catch (err) {
				console.error(err)
			}
		}
		fetchApi()
	}, [searchKey])
	return (
		<FeedSubLayout>
			{videos.length ?
				videos.map((video) => (
					<PostVideo
						key={uuid()}
						videoId={video}
					/>
				)) 
			: null}
		</FeedSubLayout>
	)
}

export default VideosMain;