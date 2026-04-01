const params = new URLSearchParams(window.location.search);
        const id = params.get("id");

        const container = document.getElementById("recipe");

        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => res.json())
            .then(data => {
                const meal = data.meals[0];

                container.innerHTML = `
                    <div class="meal-card">
                        <img src="${meal.strMealThumb}">
                        <h2>${meal.strMeal}</h2>
                        <p><strong>Instructions:</strong></p>
                        <p>${meal.strInstructions}</p>
                    </div>
                `;
            })
            .catch(() => {
                container.innerHTML = "<p>Error loading recipe</p>";
            });