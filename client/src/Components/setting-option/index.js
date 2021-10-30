import { ArrowForwardIos } from '@material-ui/icons';

const SettingOption = ({Icon, arrow=true, section, iconClass='text_black', onClick}) => (
	<div 
		className='d-flex p-2 setting-user rounded-10 transition-4s-eio cursor-pointer align-items-center flex-grow-1 mt-1 mb-1'
		onClick={onClick}
	>
		{Icon ?
			(<div className='p-2 rounded-circle bg-whitesmoke'>
				<Icon className={iconClass}/>
			 </div>)
		:null}
		<div className='ml-2 flex-grow-1'>
			<p className='m-0 text_black'>{section}</p>
		</div>
		
		{arrow && <ArrowForwardIos/>}
	</div>
)

export default SettingOption;