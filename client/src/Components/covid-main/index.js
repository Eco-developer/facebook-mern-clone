import InfoStats from '../info-stats/index.js';
import CovidNews from '../covid-news/index.js';
import axios from 'axios';
import DISEASE_API from '../../Const/diseaseApi.js';
import { FeedSubLayout } from '../Loyouts/index.js';
import { 
	useState,
	useEffect
} from 'react';
import { useFeedPeopleState } from '../../hooks/index.js';

const CovidMain = () => {
	const [covidInfo, setCovidInfo] = useState(null);
	const {
		state: {
			search: { searchKey }
		},
	} = useFeedPeopleState();

	useEffect(() => {
		const getData = async () => {
			try {
				const response = await axios.get(`${DISEASE_API}${searchKey ? `countries/${searchKey}` : 'all'}`);
				const { data } = response;
				setCovidInfo(data);
			} catch (error) {
				console.error(error.message)
			}
		};
		getData();
	}, [searchKey])

	return (
		<FeedSubLayout>
			{covidInfo  ?
				(<InfoStats covidInfo={covidInfo}/>)
			:null}
			<CovidNews/>
		</FeedSubLayout>
	)
}

export default CovidMain;