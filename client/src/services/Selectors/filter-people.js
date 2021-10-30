const filterByCountry = (list, key) =>{
	if (!key) {
		return list;
	}
	return list.filter((item) => item.country === key.name )
}

const filterByState = (list, key) => {
	if (!key) {
		return list;
	}
	return list.filter((item) => item.state === key.name )
}

const filterPeople = (list, countryKey, stateKey) => (
	filterByState(filterByCountry(list, countryKey), stateKey)  
)

export default filterPeople;