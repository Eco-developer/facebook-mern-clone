const filterMessages = (list, id) => {
	if (!list.length) { return [] }

	const newList = list.filter(message => message.sender === id || message.reciver === id);

	if (!newList.length) { return [] }

	return newList.sort((a, b) => a.updatedAt > b.updatedAt ? 1 : -1);
}

export default filterMessages;