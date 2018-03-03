var form = document.querySelector('form');

form.addEventListener('submit', function (e) {
	e.preventDefault();

	fetch('server.js')
	.then(function (response) {
		if (response.ok) {
			window.location.href = '../congrats/';
		} else  {
			window.location.href = '../go_fuck_yourself/';
		}
	})
})