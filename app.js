/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */
let section_number = 3;
const link_elements = document.createElement('li');

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */

/*
input parameters : the Section number
This function activates the section when its link is clicked by adding the 'your-active-class' to its class list. 
it also de-activate all of the other sections.
*/
function active_Class(secNum) {
    for (let i = 1; i <= section_number; i++) {
        if (document.getElementById(`section${i}`).className === 'your-active-class') {
            document.getElementById(`section${i}`).className = '';
        }
    }
    document.getElementById(`section${secNum}`).className += 'your-active-class';
}

/*
this function creates a link that navigates to the given section 
it also activates that specific section only when the link is clicked
*/
function add_link() {
    let link = document.createElement('a');
    link.setAttribute('id', `link_${section_number}`);
    link.classList.add('menu__link');
    link.innerHTML = `Section ${section_number}`;
    link.addEventListener('click', function() {
        active_Class(section_number);
        document.getElementById(`section${section_number}`).scrollIntoView({ behavior: "smooth", block: 'start' });
    });
    link_elements.appendChild(link);
    document.getElementById('navbar__list').appendChild(link_elements);
}

/**
 This function creates a new section along with its attributes and inner HTML. 
It also invokes the add_link function to automatically create a link to that section.
 */
function add_Section() {
    let section = document.createElement('section');
    section_number = section_number + 1;
    section.setAttribute('id', `section${section_number}`);
    section.setAttribute('data-nav', `Section ${section_number}`);
    section.innerHTML =
        `<div class = "landing__container">
    <h2>Section ${section_number}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci
        eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam
        in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

    <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet
        porttitor tortor, eget elementum tortor mollis non.</p>
</div>`;
    document.getElementById('main_container').appendChild(section);
    add_link();
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav links for the existing three sections.
const links_container = document.getElementById('navbar__list');

for (let i = 1; i <= section_number; i++) {
    const newLink = document.createElement('a');
    newLink.setAttribute('id', `link_${i}`);
    newLink.classList.add("menu__link");
    newLink.innerHTML = `Section ${i}`;
    newLink.addEventListener('click', function() {
        active_Class(i);
        document.getElementById(`section${i}`).scrollIntoView({ behavior: "smooth", block: 'start' });
    });
    link_elements.appendChild(newLink);
}

links_container.appendChild(link_elements);

//add new sections with new links
add_Section();

//active the scrolled section
var doc = document.documentElement;
document.onscroll = function() {
    let divNumber = 1;
    for (let i = 1; i <= section_number; i++) {
        if ((window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0) >= (document.getElementById(`section${i}`).offsetTop - 464)) {
            divNumber++;
        } else {
            break;
        }
    }
    active_Class(divNumber - 1);
};