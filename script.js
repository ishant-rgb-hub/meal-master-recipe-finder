let searchButton = document.getElementById("searchButton");
const mealContainer = document.getElementById("meals");

searchButton.addEventListener("click", () => {
	const ingredient = document.getElementById("input").value;
	fetchMeals(ingredient);
});

function fetchMeals(ingredient) {
	mealContainer.innerHTML = "<p>....... loading.....</p>";
	fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(ingredient)}`)
		.then(res => res.json())
		.then(data => {
			displayMeals(data.meals);
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