import {
  Route,
  Redirect,
} from "react-router-dom";
import { connect } from 'react-redux';
import { LANDING_PAGE } from '../../Const/routes.js';

const mapStateToProps = (state) => (
  {user : state.user}
)

const PrivateRouteBase = ({user, children, ...rest}) => {
 	return (
		<Route
      {...rest}
      render={() =>
        user ? (
          children
      ) : (
        	 <Redirect
            to={LANDING_PAGE}
          />
        )
      }
    />		
  );
}

const PrivateRoute = connect(mapStateToProps)(PrivateRouteBase);

export default PrivateRoute;