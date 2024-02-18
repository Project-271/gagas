//search
function search() {
	let input = document.getElementById('input').value
	let links = document.getElementsByClassName('search-text')

	if (input !== '') {
		let regExp = new RegExp(input, 'gi')

		for (let i = 0; i < links.length; i++) {
			links[i].innerHTML = links[i].textContent.replace(
				regExp,
				'<mark>$&</mark>'
			)
		}
	}
}

//

//feedback
function submitForm() {
	var name = document.getElementById('name').value
	var email = document.getElementById('email').value
	var phone = document.getElementById('phone').value
	var message = document.getElementById('message').value

	document.getElementById('name').value = ''
	document.getElementById('email').value = ''
	document.getElementById('phone').value = ''
	document.getElementById('message').value = ''

	alert('Форма успешно отправлена!')
}
