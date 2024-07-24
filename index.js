// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta", "Garlic Mushrooms", "Nachos"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara", "Ribs & Chips", "Fettuccine Alfredo"],
    Desserts: ["Tiramisu", "Cheesecake","Chocolate Cake", "Ice Cream"],
};

// Function to display menu items by category
function displayMenuItems(menu) {
    const menuContainer = document.getElementById("menu");

    // Loop through each category and its items in the menu object
    for (const category in menu) {
        // Create an element to represent the category
        const categoryElement = document.createElement("div");
        categoryElement.className = "category";
        categoryElement.textContent = category;

      