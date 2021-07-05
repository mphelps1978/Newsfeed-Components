/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = ['Students', 'Faculty', "What's New", 'Tech Trends', 'Music', 'Log Out'];

const button = document.querySelector('.menu-button');
const siteHeader = document.querySelector('.header');

function createMenu(array) {
	const menu = document.createElement('div');
	const list = document.createElement('ul');

	menu.classList.add('menu');

	menu.appendChild(list);

	menuItems.forEach(item => {
		const listItem = document.createElement('li');
		listItem.textContent = item;
		list.append(listItem);
	});

	const button = document.querySelector('.menu-button');
	button.addEventListener('click', () => {
    menu.classList.toggle('menu--open');

// this was my attempt at using GSAP to animate the menu, but I couldn't get it to work at all. No errors, just absolutely 0 change on the site
		var timeLine = new TimelineMax({ paused: true, reversed: true });

		timeLine
			.to('#burger1', 0.5, { rotation: 45, transformOrigin: 'left 50%', ease: Power2.easeInOut }, 'cross')
			.to('#burger2', 0.5, { autoAlpha: 0 }, 'cross')
			.to('#burger3', 0.5, { rotation: -45, transformOrigin: 'left 50%', ease: Power2.easeInOut }, 'cross')
			.to('.header', 0.75, { x: '-300px', ease: Power2.easeInOut });

		function menuIn() {
			menu.reversed() ? menu.play() : menu.reverse();
    }
// And back to MVP Code

	});

	return menu;
}

siteHeader.append(createMenu(menuItems));

/*

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.

*/
