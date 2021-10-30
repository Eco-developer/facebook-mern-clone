import FeedSide from '../feed-side/index.js';
import VideoCategory from '../video-category/index.js';
import DISEASE_API from '../../Const/diseaseApi.js';
import axios from 'axios';
import { 
	useState,
	useEffect
} from 'react';
import {v4 as uuid} from 'uuid';

const CovidSide = () => {
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		const getCountries = async () => {
			try {
				const response = await axios.get(`${DISEASE_API}countries`);
				const { data } = response;
				let allCountries = [];
				allCountries = data?.map(({country, countryInfo}) => ({
					isoCode: countryInfo.iso2,
					flag: countryInfo.flag,
					name: country,
				}));
				setCountries(allCountries)
			} catch (error){
				console.log(error.message);
			}
		};
		getCountries();
	}, [])

	return (
		<FeedSide>
			<div className='d-flex flex-column h-fill pb-1'>
				<div className='w-100 mb-2'>
					<h5 className='m-0 text_black'>
						Covid-19 country information
					</h5>
				</div>
				<div className='overflow-y flex-grow-1'>
					<div className='height-fit d-flex flex-column'>
						<VideoCategory
							category='Worldwide'
							flag='https://besthqwallpapers.com/Uploads/26-5-2019/94002/thumb2-flag-of-united-nations-4k-stone-background-grunge-flag-international-organizations.jpg'
						/>
						{countries.length ?
						countries.map(({name, isoCode, flag}) =>(
								<VideoCategory
									key={uuid()}
									category={name}
									query={isoCode}
									flag={flag}
								/>
							))
						: null}
					</div>
				</div>
			</div>
		</FeedSide>
	)
}

export default CovidSide;