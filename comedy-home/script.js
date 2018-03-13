var buttonFriends = document.querySelector('#friends');
var buttonCompanies = document.querySelector('#companies');

var choice_block = document.querySelector('.enter_members');
var friendsBlock = document.querySelector('.friends');
var companiesBlock = document.querySelector('.companies');
var ticketsOrder = document.querySelector('.comedy_zoa a');

var buttonBack1 = document.querySelector('.back1');
var buttonBack2 = document.querySelector('.back2')

buttonFriends.addEventListener('click', changeFriends);
function changeFriends() {
	friendsBlock.classList.remove('hidden');
	choice_block.style.display = "none";
	ticketsOrder.style.background = ("transparent");
	ticketsOrder.style.border = ("1px solid #767676");
}
buttonCompanies.addEventListener('click', changeCompanies);
function changeCompanies() {
	companiesBlock.classList.remove('hidden');
	choice_block.style.display = "none";
		ticketsOrder.style.background = ("transparent");
	ticketsOrder.style.border = ("1px solid #767676");
}

buttonBack1.addEventListener('click', backToChoice);
buttonBack2.addEventListener('click', backToChoice);
function backToChoice() {
	friendsBlock.classList.add('hidden');
	companiesBlock.classList.add('hidden');
	choice_block.style.display = "flex";
	ticketsOrder.style.background = ("#9e1c1e");
	ticketsOrder.style.border = ("none");
}
