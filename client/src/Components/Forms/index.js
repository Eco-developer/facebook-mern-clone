import SignInForm from './sigin-form.js';
import FirstStepForm from './signup-forms/first-step-form.js';
import SecondStepForm from './signup-forms/second-step-form.js';
import ThirdStepForm from './signup-forms/third-step-form.js';

const Form = ({onSubmit, children}) => (
	<form onSubmit={onSubmit}>
		{children}
	</form>
)

export default Form;
export {
	FirstStepForm, 
	SecondStepForm, 
	ThirdStepForm, 
	SignInForm,
};