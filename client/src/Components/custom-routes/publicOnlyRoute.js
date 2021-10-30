import {
  Route,
  Redirect,
} from "react-router-dom";
import { connect } from 'react-redux';
import { BODY } from '../../Const/routes.js';

const mapStateToProps = (state) => (
	{user : state.user}
)

const PublicOnlyRouteBase = ({user, children, ...rest}) => {
 	return (
		!user ?
 		<Route {...rest}>
 			{children}
 		</Route> : <Redirect to={BODY}/> 			
  	);
}

const PublicOnlyRoute = connect(mapStateToProps)(PublicOnlyRouteBase);

export default PublicOnlyRoute;