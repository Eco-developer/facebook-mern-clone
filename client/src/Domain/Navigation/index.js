import Loading from '../../Components/Loading/index.js';
import Login from '../Login/index.js';
import {
	PrivateRoute,
	PublicOnlyRoute
} from '../../Components/custom-routes/index.js';
import {
	BrowserRouter as Router, 
	Switch, 
	Redirect 
} from 'react-router-dom';
import {
	lazy,
	Suspense,
} from 'react';
import * as ROUTES from '../../Const/routes.js';
const SingUpPage = lazy(() => import('../sing-up/index.js')) ;
const Body = lazy(() => import('../Body/index.js'));

const Navigation = () => {
	return (
		<Router>
			<Switch>
				<Suspense fallback={<Loading/>}>
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
				</Suspense>
			</Switch>
		</Router>
	)
}

export default Navigation;