const CustomError = ({error, type}) => (
	error?.type === type ? 
		<p className='m-0 mt-1 text-danger'>
			{error.message}
		</p>
		:null
)

export default CustomError;