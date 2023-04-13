function menuOnClick() {
	document.getElementById('menu-bar').classList.toggle('change');
	document.getElementById('navi').classList.toggle('change');
	document.getElementById('menu-bg').classList.toggle('change-bg');
	document
		.getElementById('change-hero-txt')
		.classList.toggle('change-hero-txt');
}

// disable menu and fix hero-txt position if viewport is at least 768px

// need extra function for toggle off classList

function disableMenu() {
	document.getElementById('menu-bar').classList.remove('change');
	document.getElementById('navi').classList.remove('change');
	document.getElementById('menu-bg').classList.remove('change-bg');
	document
		.getElementById('change-hero-txt')
		.classList.remove('change-hero-txt');
}

// // Create a condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia('(min-width: 768px)');

function handleTabletChange(e) {
	// Check if the media query is true
	if (e.matches) {
		// Then log the following message to the console
		disableMenu();
	}
}

// Register event listener
mediaQuery.addListener(handleTabletChange);

// Initial check
handleTabletChange(mediaQuery);
