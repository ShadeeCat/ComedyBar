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


    //     var anchor = document.querySelectorAll('.links a');
    //     current = window.location.pathname.split('/')[2];
    //     for (var i = 0; i < anchor.length; i++) {
    //     if(anchor[i].dataset.url == current) {
    //         anchor[i].classList.add("active");
    //     }
    // };
