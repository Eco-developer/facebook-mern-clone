import { SIGNUP_PAGE, SECOND_STEP, THIRD_STEP } from '../../Const/routes.js';
import { useHistory } from 'react-router-dom';

const Progress = ({progress}) => {
	const { push } = useHistory();

	const goToStep = (condition, route) => {
		if (condition) { 
			push(route)
			return;
		};
	}

	return (
	  <div className='overflow-x'>
		<div className='container-fluid d-flex m-0 p-0 mb-3 m-auto fit-content'>
			<div 
				className='border rounded-circle p-3 m-3 box d-flex justify-content-center cursor-pointer align-items-center border-primary bg-primary'
				onClick={() => goToStep(true, SIGNUP_PAGE)}
			>
				<h4 
					className='text-center font-weight-normal m-0 text-white'
				>
					Step 1
				</h4>
			</div>
			<div 
				className={`border rounded-circle p-3 m-3 box d-flex justify-content-center align-items-center transition ${progress.secondStep ? 'border-primary bg-primary cursor-pointer': 'border-secondary'}`}
				onClick={() => goToStep(progress.secondStep, SECOND_STEP)}
			>
				<h4 className={`text-center font-weight-normal m-0 transition ${progress.secondStep ? 'text-white': 'text-muted'}`}
				>
					Step 2
				</h4>
			</div>
			<div
				className={`border rounded-circle p-3 m-3 box d-flex justify-content-center align-items-center transition ${progress.thirdStep ? 'border-primary bg-primary cursor-pointer': 'border-secondary'}`}
				onClick={() => goToStep(progress.thirdStep, THIRD_STEP)}
			>
				<h4 className={`text-center font-weight-normal transition m-0 ${progress.thirdStep ? 'text-white': 'text-muted'}`}
				>
					Step 3
				</h4>
			</div>
		</div>
	  </div>
	)
}

export default Progress;