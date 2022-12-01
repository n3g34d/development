# Development

### Link to Deployed Website
https://n3g34d.github.io/development/

### Goal and Value of the Application
The goal of this application is to allow bakery shoppers to easily view bakery items and add products to a cart. Users derive value through simple product navigation that allows them to more quickly identify products and/or find products they desire. 

### Usability Principles Considered
Including the menu and bakery items as seperate components was a principle designed to seperate functionality of the website. I wanted the menu to be distinct and separate from the bakery items. Including a reset button after the menu text was done intentionally as action items are better placed after text. Including the shopping cart at the bottom of the page was another usability principle designed to allow users the opporunity to view all products before making purchasing decisions. Lastly, including large add and remove buttons following each item was designed for easy visibility.

### Organization of Components
There are two components included in my implementation. One called Menu and another called BakeryItem. Menu includes the interactive buttons responsible for filtering, sorting, and resetting the website. This component includes only a reset function and handles all other functionality in app.js through props. BakeryItem is responsible for designing the appearance of an individual bakery item and for displaying and updating the aggregating cart. App.js interacts with this component through a mapping of each individual item. 

### How Data is Passed Down Through Components
All state data is initialized in App.js and passed as props to the components. The Menu component accesses the isChecked state using props to allow users to interact with the filter/sort feature and forcefully uncheck everything using the reset button. This reset button also accesses all other state variables through props in order to reset them to defualt. Many functions are also passed as props to the Menu component including all the handlers for sorting and filtering items. The bakeryItem component uses less data from App.js. It takes in all of the item details such as name, price, rating... through props as well as the count of the aggregator and current cart states. Unlike the menu component, all functions for this component, exist within the bakeryItem component.

### How the User Triggers State Changes
The user triggers state changes by clicking any of the radios, checkboxes, or buttons. Selecting the sorting radio updates the state of the sorted data which is then passed into the filters. Checking the sorting checkboxes updates the state of the "type filters" and "flavor filters" as well as the count of how many filters are selected. This helps determine which items are displayed. Checking either the radios or checkboxes also updates the state of whether they are checked or not which allows for an easier reset. The reset button changes all of the states to default and the button selection to false. Interacting with the add to cart or remove to cart buttons changes the state of the cart contents and the cart total which aggregates the cart prices. 

