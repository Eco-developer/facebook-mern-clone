const InputFile = ({id, nodeRef, onChange}) => (
	<input 
		ref={nodeRef}
		type="file" 
		id={id} 
		style={{width:'0', height:'0'}}
		onChange={onChange}	
	/>
)

export default InputFile;