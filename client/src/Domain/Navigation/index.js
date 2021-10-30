import Login from '../Login/index.js';
import SingUpPage from '../sing-up/index.js';
import Body from '../Body/index.js';
import {
	PrivateRoute,
	PublicOnlyRoute
} from '../../Components/custom-routes/index.js';
import {
	BrowserRouter as Router, 
	Switch, 
	Redirect 
} from 'react-router-dom';
import * as ROUTES from '../../Const/routes.js';

const Navigation = () => {
	return (
		<Router>
			<Switch>
				<PublicOnlyRoute exact path={ROUTES.LANDING_PAGE}>
					<Login/>
				</PublicOnlyRoute>
				<PublicOnlyRoute path={ROUTES.SIGNUP_PAGE}>
					<SingUpPage/>
				</PublicOnlyRoute>
				<PrivateRoute path={ROUTES.BODY}>
					<Body/>
				</PrivateRoute>
				<Redirect to={ROUTES.LANDING_PAGE}/>
			</Switch>
		</Router>
	)
}

export default Navigation;