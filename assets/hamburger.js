	var openMobMenu = document.querySelector('.side_menu');
	var sidenav = document.querySelector('.sidenav');
	openMobMenu.addEventListener('click', navSide);

		function navSide() {
			openMobMenu.classList.toggle("change");
			if (sidenav.style.width === "75%") {
				sidenav.style.width = "0";
			}
			else {
				sidenav.style.width = "75%";
			}
		}