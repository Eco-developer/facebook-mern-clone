const Textarea = ({value, className, onChange, placeholder=''}) => (
	<textarea 
		className={className}
		value={value}
		onChange={onChange}
		placeholder={placeholder}
	>			
	</textarea>
)

export default Textarea;