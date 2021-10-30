const ProfileButton = ({Icon=false, text='', displayMax=false, extensions=false, onClick}) => {
	return (
		<div 
			className={`p-2 rounded cursor-pointer d-flex bg-secondary align-items-center justify-content-center ${extensions} hover-bw  transition-4s-eio`}
			onClick={onClick}
		>
			{Icon ? 
				<Icon className='text_black transition-4s-eio'/> 
			: null}
			{text ? 
				<h6 
					className={`m-0 ml-2 text_black ${displayMax ?'display-max' : ''} transition-4s-eio`}
				>
					{text}
				</h6> 
			: null}
		</div>
	)
}

export default ProfileButton;