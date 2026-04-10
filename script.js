let searchButton = document.getElementById("searchButton");
const mealContainer = document.getElementById("meals");

searchButton.addEventListener("click", () => {
	const ingredient = document.getElementById("input").value;
	const diet = document.getElementById("dietFilter").value;
	fetchMeals(ingredient, diet);
});

function fetchMeals(ingredient, diet) {
	mealContainer.innerHTML = "<p>....... loading.....</p>";
	fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(ingredient)}`)
		.then(res => res.json())
		.then(data => {
			let filteredMeals = data.meals || [];
			if (diet === 'veg') {
				filteredMeals = filteredMeals.filter(meal => meal.strCategory === 'Vegetarian');
			} else if (diet === 'nonveg') {
				filteredMeals = filteredMeals.filter(meal => meal.strCategory !== 'Vegetarian');
			}
			displayMeals(filteredMeals);
		})
		.catch(() => {
			mealContainer.innerHTML = "<p>...Error fetching data</p>";
		});
}

function displayMeals(meals) {
	if (!meals) {
		mealContainer.innerHTML = "<p>No recipes found</p>";
		return;
	}
	console.log(meals);

	mealContainer.innerHTML = meals.map(meal => `
			<div class="meal-card">
				<img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
				<h3>${meal.strMeal}</h3>
				<button onclick="viewRecipe('${meal.idMeal}')">View Recipe</button>
			</div>
		`).join("");
}

function viewRecipe(id) {
	window.location.href = `recipe.html?id=${id}`;
}

// Theme Toggle
document.addEventListener('DOMContentLoaded', () => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    const toggleBtn = document.querySelector('.theme-toggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
});
