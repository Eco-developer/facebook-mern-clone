const filterByUserId = (list, key) => (
	list.filter(item => item.user_id === key)
)

export default filterByUserId;