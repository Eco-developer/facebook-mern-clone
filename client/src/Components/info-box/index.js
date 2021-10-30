//import numeral from "numeral";
import { PostLoyout } from '../Loyouts/index.js';
//import { prettyPrintStat } from '../../services/pretty-print-stat/index.js';

const InfoBox = ({onClick, title, cases, total, type, currentType}) => (
	<div 
		onClick={onClick}
		className='info-box'
	>
		<PostLoyout 
			extend={`${currentType === type ? type + '-active' : ''} cursor-pointer transition-4s-eio`}
			mnres={false}
		>
			<div className='mb-1'>
				<h5 
					className={`${currentType === type ? 'text_black' : 'text-secondary transition-4s-eio'} m-0 transition-4s-eio`}
				>
					{title}
				</h5>
			</div>
			<div className='mb-1'>
				<h5 className={`${currentType === type ? type + '-text-active' : 'text_black'} m-0 transition-4s-eio`}
				>
					{cases}
					{/*prettyPrintStat(cases)*/}
				</h5>
			</div>
			<div>
				<h6 
					className={`${currentType === type ? 'text_black' : 'text-secondary'} m-0 transition-4s-eio`}
				>
					{total}
					{/*numeral(total).format("0.0a")*/}
				</h6>
			</div>
		</PostLoyout>
	</div>
)

export default InfoBox;