const toObj = (obj, item) => {
    if (!obj[item.user_id]) {
        obj[item.user_id] = {
        	user_id: item.user_id,
        	user_stories: [item]
        };
    } else {
      	obj[item.user_id].user_stories.push(item);
    }
      
    return obj;
}

const modifyDS = (arr) => {
    if (!arr.length) {
        return [];
    }
	const obj = arr.reduce(toObj, {});
    const newArr =  Object.values(obj);
	return newArr;
}

export default modifyDS;