const ProfileNavOptions = ({target, active=false, onClick, text}) => (
	<div 
		onClick={(e) => onClick(e, target)}
		className={`d-flex justify-content-center align-items-center h-fill pr-3 pl-3 p-03 cursor-pointer ${active ? 'border-bottom-2 border-primary': ""}`}
	>
		<h6 
			className={`m-0 ${active ? 'text-primary': "text_black"}`}
		>
			{text}
		</h6>
	</div>
)

export default ProfileNavOptions;