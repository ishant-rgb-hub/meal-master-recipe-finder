# 🍽️ Meal Master – Smart Recipe Finder

## 📌 Overview

Meal Master is a user-friendly web application designed to help users discover recipes based on the ingredients they already have at home. Instead of searching for random recipes and then buying ingredients, this app reverses the process — making cooking more efficient, budget-friendly, and waste-free.

The application fetches real-time recipe data from a public API and presents it in a clean, visually appealing interface with rich food images and detailed cooking instructions.

---

## 🎯 Problem Statement

Many people struggle with:

* Deciding what to cook with limited ingredients
* Wasting food due to lack of meal planning
* Spending extra money on unnecessary groceries

Meal Master solves these problems by suggesting recipes that match available ingredients.

---

## 🌐 API Integration

This project uses **TheMealDB API**:
https://www.themealdb.com/api.php

### 🔌 API Capabilities Used:

* Search meals by ingredient
* Fetch full recipe details
* Retrieve images and instructions

### 📌 Example Endpoints:

* Search by ingredient:
  https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken
* Lookup full recipe:
  https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772

---

## 🚀 Planned Features

### 🔍 1. Ingredient-Based Search

Users can enter one or more ingredients to find matching recipes.

### 📋 2. Recipe Details Page

Each recipe will include:

* Ingredients list
* Step-by-step instructions
* Meal image
* Category (e.g., vegetarian, dessert)

### 🧮 3. Nutrition Facts Toggle (UI-based)

A toggle button to display estimated nutrition values (UI simulation or future API integration).

### 🛒 4. Shopping List Generator (Challenge Feature)

Users can:

* Select up to 3 recipes
* Automatically combine all ingredients
* View a compiled shopping list

### 🎛️ 5. Filtering Options

* Filter by category (veg, non-veg, dessert)
* Filter by available ingredients

### 🔃 6. Sorting Options

* Alphabetical order
* Based on meal name



### 🌗 7. Dark Mode / Light Mode

Toggle between themes for better user experience.

---

## ⚙️ Technologies Used

### 🧩 Core Technologies:

* HTML5
* CSS3
* JavaScript (ES6)

### 🔌 JavaScript Concepts:

* Fetch API for API calls
* Array Higher-Order Functions:

  * map()
  * filter()
  * find()
  * sort()

### 🎨 UI/UX:

* Responsive Design (Mobile + Tablet + Desktop)
* Clean kitchen-inspired layout
* High-quality food images

### 💾 Optional Enhancements:

* Local Storage (for favorites & shopping list)
* Debouncing (for search input)
* Loading spinners

---

## 📂 Project Structure

```
meal-master/
│
├── index.html        # Main homepage
├── recipe.html       # Individual recipe view page
├── style.css         # Styling
├── script.js         # API + logic
├── assets/           # Images/icons
└── README.md         # Project documentation
```

---

## 🧠 Application Workflow

1. User enters ingredient (e.g., "chicken")
2. App fetches recipes from API
3. Recipes displayed as cards
4. User clicks "View Recipe"
5. Detailed recipe page opens
6. User can:

   * Add to favorites
   * Add to shopping list

---

## 📱 Responsiveness

The application will be fully responsive:

* 📱 Mobile-friendly layout
* 💻 Desktop grid view
* 📟 Tablet optimized spacing

---

## ⚠️ Error Handling

* Show message if no recipes found
* Handle API errors gracefully
* Display loading indicator while fetching data

---

## ▶️ How to Run the Project

1. Clone the repository:

   ```
   git clone https://github.com/your-username/meal-master.git
   ```

2. Open the project folder

3. Run:

   * Open `index.html` in your browser



## 📅 Development Timeline

### Milestone 1 (Planning)

* Project idea finalized
* API selected
* README created

### Milestone 2 (API Integration)

* Fetch recipes from API
* Display results dynamically

### Milestone 3 (Core Features)

* Search, filter, sort
* Favorites & UI interactions

### Milestone 4 (Final Submission)

* Code cleanup
* Deployment
* Final documentation

---

## 🔮 Future Scope

* Real nutrition API integration
* Voice-based ingredient input
* AI-based recipe suggestions
* Progressive Web App (PWA)

---

## 💡 Key Learning Outcomes

* Working with real-world APIs
* Using JavaScript HOFs effectively
* Building responsive UI
* Managing application state

---

## 🙌 Conclusion

Meal Master is a practical and creative project that combines problem-solving with modern web development techniques. It demonstrates real-world skills such as API integration, UI design, and user interaction handling.

---
