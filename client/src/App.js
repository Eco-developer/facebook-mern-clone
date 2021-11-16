import './App.css';
import Navigation from './Domain/Navigation/index.js';
import Loading from './Components/Loading/index.js';
import Pusher from 'pusher-js';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { requestData } from './actions/index.js';
import {
	UPDATE_USER_PROFILE,
	UPDATE_EXPANDED_POST_COMMENTS,
	SET_COMMENT,
	SET_MESSAGE,
	SET_NOTIFICATION,	
} from './Const/action-types.js';

const mapDispatchToProps = (dispatch) => {
	return {
		seedInitialData: () => dispatch(requestData()),
		handleDispatch: (action) => dispatch(action)
	};
};

const mapStateToProps = (state) => (
	{ 
		isLoading: state.appLoading,
		user: state.user,
	}
)

function AppBase({seedInitialData, isLoading, handleDispatch, user}) {
	useEffect(() => {
		seedInitialData();
	}, [])

	useEffect(() => {
		const pusher = new Pusher(
			process.env.REACT_APP_PUSHER_KEY, 
			{ cluster: 'us2' }
		);
		const channel = pusher.subscribe("facebook-channel");

    	channel.bind("trigger", (data) => {
    		if (user) {
				const {
    				type, 
    				payload
    			} = data;
    			if (type === UPDATE_USER_PROFILE) {
    				const { update_profile_type } = data;
    				if (update_profile_type === 'PROFILE_PICTURE') {
    					seedInitialData();
    				}
    				return;
    			}
    			if (type === SET_COMMENT) {
    				handleDispatch({type: UPDATE_EXPANDED_POST_COMMENTS, payload})
    			}

    			if (type === SET_MESSAGE) {
    				if (payload.sender !== user._id && payload.reciver !== user._id) {
    					return;
    				}
    			}

    			if (type === SET_NOTIFICATION && (payload.user.user_id === user._id)) {
    				return;
    			}

    			handleDispatch({type, payload});
			}
   		})
   		return () => {
   			channel.unbind_all();
   			channel.unsubscribe();
   		}
	})

  	return (
		isLoading ?
		<Loading/>: 
		<div className='app mw-100 vh-100 bg-white'>
			<Navigation/>
		</div>
  	);
}

const App = connect(
	mapStateToProps,
	mapDispatchToProps
)(AppBase)

export default App;
