const getFriends = (list, id) => (
	list.filter(entitie => entitie._id !== id)
)

export default getFriends;