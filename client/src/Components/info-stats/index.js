import InfoBox from '../info-box/index.js';
import InfoStatsHeader from '../info-stats-header/index.js';
//import LineGraph from '../line-graph/index.js';
import { useState } from 'react';

const InfoStats = ({covidInfo}) => {
	const [casesType, setCasesType] = useState('cases');
	const handleCasesType = (type) => {
		if (casesType !== type) {
			setCasesType(type);
		}
	};
	return (
		<div className='w-100 d-flex flex-column max-1000'>
			<InfoStatsHeader
				src={covidInfo.countryInfo?.flag}
				name={covidInfo.country}
			/>
			<div className='d-flex info-stats align-items-center'>
				<InfoBox
					onClick={() => handleCasesType('cases')}
					title='Coronavirus Cases'
					cases={covidInfo.todayCases}
					total={covidInfo.cases}
					type='cases'
					currentType={casesType}
				/>
				<InfoBox
					onClick={() => handleCasesType('recovered')}
					title='Recovered'
					cases={covidInfo.todayRecovered}
					total={covidInfo.recovered}
					type='recovered'
					currentType={casesType}
				/>
				<InfoBox
					onClick={() => handleCasesType('deaths')}
					title='Deaths'
					cases={covidInfo.todayDeaths}
					total={covidInfo.deaths}
					type='deaths'
					currentType={casesType}
				/>
			</div>
			{/*<LineGraph 
				casesType={casesType}
			/>*/}
		</div>
	)
}

export default InfoStats;