/** Hi Benjamin. Also found this challenging task. Especially these snippets of codes. 
 * I will try and go over it line by line and figure it out. 
 * The DOM manipulation is quite straight forward. 
 * I think overall i need to recap on functions, arrow functions, arrays.map, arrays.reduce
 * classes and objects.  
 * 
 * function displayMenuItems(menu) {
    const menuContainer = document.getElementById("menu");

    // Loop through each category and its items in the menu object
    for (const category in menu) {


function initMenuSystem(menu) {
    displayMenuItems(menu);
}

// Initialize the menu system when the page loads
window.onload = () => {
    initMenuSystem(menu);
};

*/
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    const menuContainer = document.getElementById("menu");

    // Loop through each category and its items in the menu object
    for (const category in menu) {
        // Create an element to represent the category
        const categoryElement = document.createElement("div");
        categoryElement.className = "category";// Assign CSS properties
        categoryElement.textContent = category;

       
        // Append the category element to the menu container
        menuContainer.appendChild(categoryElement);

        // Create an element to represent a list of items
        const itemList = document.createElement("ul");

        // Append a list of items element to the menu container
        menuContainer.appendChild(itemList);

        // Loop through the items in the category and create list items
        menu[category].forEach(item => {
            // Create a list item element
            const listItem = document.createElement("li");
            listItem.className = "item";
            listItem.textContent = item;

            // Attach a click event listener to the list item to add it to the order
            listItem.addEventListener("click", () => {
                addToOrder(item);
            });

            // Append the list item to the list of items
            itemList.appendChild(listItem);
        });
    }
}

// Function to add an item to the order
function addToOrder(itemName) {
    const orderItems = document.getElementById("order-items");
    const orderTotalElement = document.getElementById("order-total");

    // Create a new list item element for the order
    const orderItem = document.createElement("li");
    orderItem.textContent = itemName;

    // Append the order item to the order list
    orderItems.appendChild(orderItem);

    // Update the total price (assuming each item is 20 for simplicity)
    let currentTotal = parseFloat(orderTotalElement.textContent);
    currentTotal += 20; // Adjust this value as per actual item prices
    orderTotalElement.textContent = currentTotal.toFixed(2);
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    displayMenuItems(menu);
}

// Initialize the menu system when the page loads
window.onload = () => {
    initMenuSystem(menu);
};