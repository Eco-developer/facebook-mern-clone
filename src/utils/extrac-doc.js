const extracDoc = (arr) => {
	return arr.map(entity => entity._doc)
}

export default extracDoc;