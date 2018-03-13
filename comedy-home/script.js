var buttonFriends = document.querySelector('#friends');
var buttonCompanies = document.querySelector('#companies');

var choice_block = document.querySelector('.enter_members');
var friendsBlock = document.querySelector('.friends');
var companiesBlock = document.querySelector('.companies');

var buttonBack1 = document.querySelector('.back1');
var buttonBack2 = document.querySelector('.back2')

buttonFriends.addEventListener('click', changeFriends);
function changeFriends() {
	friendsBlock.classList.remove('hidden');
	choice_block.style.display = "none";
}
buttonCompanies.addEventListener('click', changeCompanies);
function changeCompanies() {
	companiesBlock.classList.remove('hidden');
	choice_block.style.display = "none";
}

buttonBack1.addEventListener('click', backToChoice);
buttonBack2.addEventListener('click', backToChoice);
function backToChoice() {
	friendsBlock.classList.add('hidden');
	companiesBlock.classList.add('hidden');
	choice_block.style.display = "flex";
}
