## 📚 Questions & Answers

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

- `getElementById` selects one element by its unique id or first id if more that one .
- `getElementsByClassName` selects all elements with a class and give us html collection .
- `querySelector` select first matching element using a css selector .
- `querySelectorAll` selects all matching elements using a css selector and return node list.

### 2. How do you create and insert a new element into the DOM?

- JavaScript provides two functions for this: `document.createElement('tagName')` to create a new element, and `parent.appendChild(element)` to insert it into the page.

### 3. What is Event Bubbling? And how does it work?

- Event Bubbling is when an event on a child element automatically moves up to its parent elements.
- The event first runs on the element where it was triggered, then goes to its parent and continues up the DOM tree, so a single action can affect multiple elements.

### 4. What is Event Delegation in JavaScript? Why is it useful?

- Event Delegation is when you attach a single listener to a parent element instead of each child and it catches events from it child elements as they happen . It saves memory and woks for elements added later dynamically .

### 5. What is the difference between preventDefault() and stopPropagation() methods?

- `preventDefault()` stops the browser’s default action for an event (like following a link, reloading, or submitting a form).
- `stopPropagation()` stops the event from moving up or down the DOM tree and only affects the element where the event was triggered.
