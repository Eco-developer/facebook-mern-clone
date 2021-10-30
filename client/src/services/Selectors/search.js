const search = (list, searchKey) => (
	list.filter(item => item.displayName.toLowerCase().includes(searchKey.toLowerCase()) || item.displayName.toLowerCase() === searchKey.toLowerCase())
)

export default search;