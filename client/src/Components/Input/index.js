import Textarea from './textarea.js';
import InputFile from './input-file.js';

const Input = ({id, value, type='text', onChange, placeholder='', highlight=''}) => (
	<input
		id={id}
		value={value}
		className={`form-control ${highlight}`}
		type={type}
		onChange={onChange}
		placeholder={placeholder}
	/>
)

export default Input;
export { 
	Textarea,
	InputFile,
};