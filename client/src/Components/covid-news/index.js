import Articule from '../Articule/index.js';
import axios from 'axios';
import newsApi from '../../Const/newsApi.js';
import { 
	useState,
	useEffect
} from 'react';

const CovidNews = () => {
	const [articlesSet, setArticles] = useState([]);

	useEffect(() => {
		const getData = async () => {
			try {
				const response = await axios.get(`${newsApi}`)
				const { 
					data: {
						articles,
					}
				} = response;
				setArticles(articles)
			} catch (error) {
				console.error(error.message)
			}
		};
		getData();
	}, [])
	return (
		<div className='w-100 d-flex flex-column max-1000'>
			{articlesSet.length ? 
				articlesSet.map(({source, title, url, image, description}) => (
					<Articule
						key={url}
						source={source?.name}
						title={title}
						url={url}
						urlToImage={image}
						description={description}
					/>
				))
			:null}
		</div>
	)
}

export default CovidNews;