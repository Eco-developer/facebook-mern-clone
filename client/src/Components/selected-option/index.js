const SelectedOption = ({option, onClick, extend=''}) => (
	option ? 
		(<div 
			className={`p-2 rounded-10 bg-blue flex-grow-1 cursor-pointer d-flex justify-content-center ${extend}`}
			onClick={onClick}
		>
			<p className='m-0 text-white fit-content'>{option.name}</p>
		</div>)
	: null
)

export default SelectedOption;