# Landing Page Project
This project aims to build a navigation bar for that landing web page. the main goal is to make build that nav-bar in a dynamic way to allow the flexibility of adding new sections with their links automatically. This purpose could only be achieved by using JavaScript code.

# Functions used in JavaScript code
1) function active_class (secNum) : void
	input parameters : the Section number
	This function activates the section when its link is clicked by adding the 'your-active-class' to its class list. it also de-activate all of 		the other sections.
	

2) function add_link(void) : void
	this function creates a link that navigates to a section. It also activates that specific section only when the link is clicked. 
	The generated link is given an id and an event listener in a consistent way to make it easy to read and debug the code.

3) function add_section() : void
	 This function creates a new section along with its attributes and inner HTML. 
	 It also invokes the add_link function to automatically create a link to that section.

# iterations
The existing three sections' links are created using a for loop to create one element at a time. each element has consistent and logical attributes and content. 
Each element has an event listener that is made by invoking a global function to improve the performance of the code.
After creating an element it is hen appended to the navigation unordered list.
