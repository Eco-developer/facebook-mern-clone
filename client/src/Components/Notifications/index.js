import Notification from '../Notification/index.js';
import { PostLoyout } from '../Loyouts/index.js';
import { BackButtonLg } from '../Buttons/index.js';
import { connect } from 'react-redux';
import {v4 as uuid} from 'uuid';
import { handleNotifications } from '../../services/handle-notification/index.js';

const mapStateToProps = (state) => (
	{ notifications: state.notifications }
)

const NotificationsBase = ({open, handleOpenNotifications, notifications}) => (
	<PostLoyout
		extend={`rounded setting-dropdown overflow-y overflow-x-hidden transition-4s-eio ${open ? 'open-dropdown' : ''}`}
		mnres={false}
	>
		<div className='notifications-container d-flex flex-column w-100'>
			<div className='height-fit d-flex flex-column w-100 p-2 pb-0'>
				<BackButtonLg
					onClick={handleOpenNotifications}
					extend='p-2'
				/>
				<div className='p-2 pt-0'>
					<h5 className='m-0 text_black'>
						Notifications
					</h5>
				</div>
			</div>
			<div className='overflow-y flex-grow-1 notification-container-container'>
				<div className='height-fit d-flex flex-column notification-container'>
					{	notifications.length ?
						handleNotifications(notifications).map(({user, type, target, timestamp}) => (
							<Notification
								user={user}
								type={type}
								target={target}
								timestamp={timestamp}
								key={uuid()}
							/>
						)) :
						(<div className='flex-grow-1 d-flex justify-content-center align-items-center p-2'>
								<h5 className='m-0 text_black'>
									there are not notifications
								</h5>
						</div>)
					}
				</div>
			</div>
		</div>
	</PostLoyout>
)

const Notifications = connect(mapStateToProps)(NotificationsBase)

export default Notifications;
//h-fill