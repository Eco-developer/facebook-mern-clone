const NotificationIcon = ({color, Icon}) => (
	<div className={`notificaction-icon p-absolute ${color}`}>
		<Icon className='text-white'/>
	</div>
)

export default NotificationIcon;