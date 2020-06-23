let getKurs = () => {
	return axios.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
}