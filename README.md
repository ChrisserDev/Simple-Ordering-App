# Simple Ordering App

https://simplefoodordering.netlify.app/

## Project Structure:

### HTML Structure:

  The project uses HTML to define the structure of the webpage. It includes sections for the header, main content (menu and customer order), and a modal container with a payment form.

### Header Section:
  Contains an image and text introducing "Jimmy's Diner." Styling includes absolute positioning of text over the image.

### Main Menu and Customer Order Section:

  Displays a menu with each item represented as a separate block. Allows users to click on items to add them to the customer's order. 
  
  The customer order is displayed below, and a "Complete Order" button triggers a modal for payment.

### Modal Container with Form:

A modal container appears for entering card details after clicking "Complete Order." Contains a form with input fields for name, card number, and CVV. The form includes a "PAY" button to submit payment.

## CSS Styling:

The project utilizes CSS to style the webpage. It defines styles for the header, main content, modal container, form elements, and various layout adjustments for different screen sizes using media queries.

## JavaScript concepts used:

### DOM Manipulation:

  The code dynamically manipulates the Document Object Model (DOM) to update and display menu items, customer orders, and modal content based on user interactions.

### Event Handling and Event Delegation:

  Event listeners are used to handle user interactions such as clicks on menu items, removal of items, form submissions, and clicks outside the modal.
  Event delegation is employed to handle events for dynamically added elements, like menu items.

### Arrays and Array Methods:
  
  Arrays are utilized to store and manage the list of ordered items (orderItems). Array methods such as map, reduce, and forEach are used to iterate through and manipulate arrays.

### Template Strings (String Interpolation):

  Template strings are employed to dynamically construct HTML elements with variables, facilitating the creation of menu items and order summaries.

### Conditional Logic:

Conditional statements are used to check if certain conditions are met, such as verifying if a clicked element has a specific dataset attribute.

### Object Methods (Array.find):
  
  The Array.find method is used to find a specific object in an array based on a condition. In this case, it is used to find a menu item by its ID.

### Asynchronous Operations (setTimeout):

  The setTimeout function is used for asynchronous operations to display a confirmation message temporarily and then hide it after a certain time period.

### CSS Styling Manipulation:
  
  The JavaScript code adjusts the styling of HTML elements dynamically, such as changing the display property to show/hide elements and applying blur effects.

### Form Handling:

The code handles form submissions, preventing the default form behavior and executing custom logic (e.g., displaying a confirmation message).

### External Data Import (ES6 Module):
  
  The project utilizes the ES6 module system to import external data (menuArray) from a separate file.

### Variable Scope:

Proper variable scoping is employed to manage variables at the appropriate levels of the script, preventing unintended side effects.
