import { useState } from 'react';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';

const Select = ({id, options = [], currentOption='There are no states', spec, onChange}) => {
  const [showFlag, setShow] = useState(false);

  const showMenu = (e) => {
    e.stopPropagation();
    if (options.length) {
    	if (!showFlag) {
      		setShow(true);
      		document.addEventListener('click', closeMenu);
    	} else {
      		closeMenu();
    	} 
    }
  }

  const closeMenu = (e) => {
    setShow(false);
    document.removeEventListener('click', closeMenu);
    
  }

  const showDropDown = () => {
  	if (options.length) {
  		return (
  			showFlag ? 
				<ArrowDropUp/> :
				<ArrowDropDown/>
  		)
  	} else {
  		return null;
  	}
  }

  return (
    <>
      <div 
      	id={id}
        onClick={showMenu}
        className='form-control d-flex align-items-center justify-content-between'
      > 
      	{currentOption}
		{showDropDown()}
      </div>
      <div 
        className={`select-container${showFlag ? ' open' : ''}`}
      >
        {options?.map((item) => (
            <div 
              className='select-item'
              key={item.isoCode}
              onClick={() => onChange(item)}
            >
               {item[spec]}
            </div>
         ))}
      </div>
    </>
  )
}

export default Select;