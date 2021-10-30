const setStyles = (node, flag, defaultObj={}, upDated={}) => {
	if (flag) {	
		Object.keys(defaultObj).forEach((property) => {
			node.style.setProperty(
				`${property}`,
				defaultObj[property],
				'important'
			);
		})
	} else {
		Object.keys(upDated).forEach((property) => {
			node.style.setProperty(
				`${property}`,
				upDated[property],
				'important'
			);
		})
	}	
}

export default setStyles;