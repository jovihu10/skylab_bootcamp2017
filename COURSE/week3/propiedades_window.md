
**Propiedades de window**

window.navigator is an object that contains information about the browser
>>> window.navigator.userAgent
"Mozilla/5.0 (Windows; U; Windows NT 5.1; es-ES; rv:1.9.2.12)
Gecko/20101026 Firefox/3.6.12 ( .NET CLR 3.5.30729)"

window.location is an objects that contains info (and methods) about the current URL


window.history is an object that contains the history of visited pages and it has methods to move around themm (without thee possibility of seeing the URL’s)

window.frames is a colection of all the frames that are in the page. Every frame has its own window object. We can use parent to access the parent frame from the children frame. With the property top we can access the page in top of all the frames.
We can access a concrete frame by its name.


window.screen offers info about the screen (general, out of the browser)


**window methods**
window.open(), window.close() allow us to open and close new windows (popups)
window.open() returns a reference to the opened window (it it returns false that means the window couldn't be created - popups blocked)
Its use is not recommended ;-)









**DOM**
The DOM (Document Object Model) is a way of representing a HTML document (or XML) like a tree of nodes.
By using DOM methods and properties we can access the page elements, modify them, remove them or adding new ones



**NODE**
The node documentElement is the root node. For HTML documents is the <html> tag

Every node can have children-nodes:
hasChildNodes() : This methos will return true if the node has children-nodes
childNodes: Return an array of all the children-nodes of an element.
Because of being an array we can figure out the number of children-nodes with childNodes.length
parentNode: Return us the father-node of a children-node


We can check the existance of attributes and accesing to their attributes:
hasAttributes(): Return true if the element has attributes
getAttribute(): Return the content of an attribute


We can access the content of a tag:
textContent: This property give us the plain text inside of a tag In IE this property doesn't exists (we have to use innerText)
innerHTML: This property gives us the content (in HTML) inside of a tag



We can directly access to some elements without the need of going over all the tre:
getElementsByTagName(): Return an array with all the elements with the tag passed as a parameter
getElementsByName(): Return an array with all the elements with the name passed as a parameter
getElementById(): Return an element with the ID passed as a parameter




From a node we can access its brothers and the first and last of its children
nextSibling: Return the next brother
previousSibling: Return the previous brother
firstChild: Return the first child
lastChild: Return the last child



To change the content of a tag we can change the content of innerHTML
>>> var my = document.getElementById('closer');
>>> my.innerHTML = '<em>my</em> final';
>>> my.firstChild
<em>
>>> my.firstChild.firstChild
"my"
>>> my.firstChild.firstChild.nodeValue = 'your';
"your"



The elements has the property style that we can use to modify its styles
http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-ElementCSSInlineStyle

>>> my.style.border = "1px solid red";
"1px solid red"
We can also modify attributes wether they exist or not Example:
>>> my.align = "right";
"right"
>>> my.name
>>> my.name = 'myname';
"myname"
>>> my.id
"closer"
>>> my.id = 'further'
"further"




