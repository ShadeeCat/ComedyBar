var buttonFriends = document.querySelector('#friends');
var buttonCompanies = document.querySelector('#companies');

var choice_block = document.querySelector('.enter_members');
var friendsBlock = document.querySelector('.friends');
var companiesBlock = document.querySelector('.companies');
var ticketsOrder = document.querySelector('.comedy_zoa a');


buttonFriends.addEventListener('click', function() {
	friendsBlock.classList.remove('hidden');
	choice_block.style.display = "none";
	ticketsOrder.style.background = ("transparent");
	ticketsOrder.style.border = ("1px solid #767676");
});
buttonCompanies.addEventListener('click', function() {
	companiesBlock.classList.remove('hidden');
	choice_block.style.display = "none";
	ticketsOrder.style.background = ("transparent");
	ticketsOrder.style.border = ("1px solid #767676");
});

var buttonBack = document.querySelectorAll('.back')
for (var i = 0; i < buttonBack.length; i++) {
	buttonBack[i].addEventListener('click', function() {
		friendsBlock.classList.add('hidden');
		companiesBlock.classList.add('hidden');
		choice_block.style.display = "flex";
		ticketsOrder.style.background = ("#9e1c1e");
		ticketsOrder.style.border = ("none");
});
}
