const sortByTimestamp = (list) => (
	list.sort((a, b) =>  a.createdAt < b.createdAt ? 1 : -1)
)

export default sortByTimestamp;