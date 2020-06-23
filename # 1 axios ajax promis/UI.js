//В переменные назначили DOM элементы с конерктными ID что бы к ним в дальнейшем обращатся 
let select_valut = document.querySelector('#valuta') //Выпадающий список 
let result_valut = document.querySelector('#result_valut') //Курс валют
let result = document.querySelector('#result') //коэффициент курса


// Делаем функцию которая принимает 2 значения. коэффициент курса и название валюты
let addValue = (value, valuta) => {
	result.innerHTML = value
	result_valut.innerHTML = valuta
}

// Инициализационное значение 1 гривна = 1 гривна
addValue('1', 'Гривна')


//Отслеживаем изменение событий и в зависимости 
//getKurs как только отрабатывает выполняет то что внутри then
//response - это то что вернул getKurs
//Перебираем подходящий курс через switch на основе значения #select_valut
select_valut.addEventListener('change', ()=>{
	getKurs().then(
		(response)=>{
			 switch (select_valut.value) {
				case 'r': addValue(response.data[2].buy, 'Рубль'); break
				case 'd': addValue(response.data[0].buy, 'Доллар'); break
				case 'e': addValue(response.data[1].buy, 'Евро'); break
				default: 1
				}		
			}
		)
})



