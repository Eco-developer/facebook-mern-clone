/*import axios from 'axios';
import DISEASE_API from '../../Const/diseaseApi.js';
import buildChartData from '../../services/build-chart-data/index.js';
import { PostLoyout } from '../Loyouts/index.js'
import { Line } from "react-chartjs-2";
import { 
  useState, 
  useEffect 
} from "react";

import { useFeedPeopleState } from '../../hooks/index.js';
import { casesTypeColors } from '../../Const/cases-type-colors.js';
import { options } from '../../Const/graph-option.js';

const LineGraph = ({ casesType='cases' }) => {
  const [graphData, setGraphData] = useState([]);
  const [vaccineInfo, setVaccineInfo] = useState({});
  const [vaccineGraphData, setVaccineGraphData] = useState([]);

  const {
    state: {
      search: { searchKey }
    },
  } = useFeedPeopleState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${DISEASE_API}historical/all?lastdays=90`);
        const { data } = response;
        setGraphData(buildChartData(data, casesType));
      } catch (error) {
        console.log(error)
      }
    };

    fetchData();
  }, [casesType]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${DISEASE_API}vaccine/coverage${searchKey ? `/countries/${searchKey}` : ''}?lastdays=90&fullData=true`);
        const { data } = response;        
        let graphData;
        if (searchKey) {
          setVaccineInfo({country: data.country});
          graphData = data.timeline;
        } else {
          setVaccineInfo({country: 'Worldwide'});
          graphData = data;
        }
        
        const modifiedData = graphData.filter(({daily}) => daily != 0).map(({date, daily}) => ({
        x: date,
        y: daily
      }))
        setVaccineGraphData(modifiedData);
      } catch (error) {
        console.log(error.message)
      }
    };
    getData();
  }, [searchKey]);

  return (
    <div className='d-flex flex-column'>
      {graphData.length ?
        <PostLoyout extend='graph-container'>
          <Line
            data={{
              datasets: [
                {
                  backgroundColor: casesTypeColors[casesType].half_op,
                  borderColor: casesTypeColors[casesType].hex,
                  label: `Worldwide ${casesType}`,
                  data: graphData,
                },
              ],
            }}
            options={options}
          />
        </PostLoyout>
      : null}
      {vaccineGraphData.length ?
        <PostLoyout extend='graph-container'>
          <Line
            data={{
              datasets: [
                {
                  backgroundColor: casesTypeColors.recovered.half_op,
                  borderColor: casesTypeColors.recovered.hex,
                  label: `${vaccineInfo.country} vaccine coverage`,
                  data: vaccineGraphData,
                },
              ],
            }}
            options={options}
          />
        </PostLoyout>
      : null}
    </div>
  );
}

export default LineGraph; */