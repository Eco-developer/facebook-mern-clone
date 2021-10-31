import Progress from '../../Components/Progress/index.js';
import { 
	FirstStepForm, 
	SecondStepForm, 
	ThirdStepForm 
} from '../../Components/Forms/index.js';
import { useState } from 'react';
import { 
	BrowserRouter as Router, 
	Switch, 
	Route, 
	Redirect, 
	Link
} from 'react-router-dom';
import { 
	LANDING_PAGE, 
	SIGNUP_PAGE, 
	SECOND_STEP, 
	THIRD_STEP
} from '../../Const/routes.js';
import logo from '../../Images/1280px-Facebook_Logo_(2019).svg.png';

const SignUpPage = () => {
	const [progress, setProgress] = useState({secondStep: false, thirdStep: false})

	return (
		<div className='mw-100 vh-100 overflow-y'>
			<div className='container-fluid d-flex justify-content-center mb-3 pt-3'>
				<Link to={LANDING_PAGE}>
					<img 
						src={logo} 
						alt="logo"
						className='img'
					/>
				</Link>
				
			</div>
			
			<Router>
				<Progress 
					progress={progress}
				/>
				<Switch>
					<Route
						render={(props) => (
							<FirstStepForm
								{...props}
								setProgress={setProgress}
							/>
						)}
						exact path={SIGNUP_PAGE}
					/>
					<Route 
						render={(props) => (
							progress.secondStep ?
							<SecondStepForm
								{...props}
								setProgress={setProgress}
							/> : 
							<Redirect to={SIGNUP_PAGE} />
						)}
						exact path={SECOND_STEP}
					/>
					<Route 
						render={(props) =>(
							progress.thirdStep ?
							<ThirdStepForm
								{...props}
							/> :
							<Redirect to={SIGNUP_PAGE} />
						)}
						exact path={THIRD_STEP}
					/>
					<Redirect to={SIGNUP_PAGE} />
				</Switch>
			</Router>
		</div>
	)
}

export default SignUpPage