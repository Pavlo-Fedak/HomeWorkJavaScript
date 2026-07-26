
const recipesContainer = document.getElementById("recipes");

fetch("https://dummyjson.com/recipes")
.then(response => response.json())
.then(recipesObject => {
    const { recipes} = recipesObject;
    console.log(recipes);

    for(const recipe of recipes ){
        const recipeDiv = document.createElement("div");
        recipeDiv.classList.add("recipe-container");

        const recipeTitle = document.createElement("h2");
        recipeTitle.innerText = recipe.name;

        recipeDiv.appendChild(recipeTitle);

        const recipeInfo = document.createElement("div");

        recipeInfo.innerText = `
        id: ${recipe.id}
        prepTimeMinutes: ${recipe.prepTimeMinutes}
        cookTimeMinutes: ${recipe.cookTimeMinutes}
        servings: ${recipe.servings}
        difficulty: ${recipe.difficulty}
        cuisine: ${recipe.cuisine}
        caloriesPerServing: ${recipe.caloriesPerServing}
        userId: ${recipe.userId}
        rating: ${recipe.rating}
        reviewCount: ${recipe.reviewCount}
        `;
        recipeDiv.appendChild(recipeInfo);
        const ingredientsTitle = document.createElement("h3");
        ingredientsTitle.innerText = "Ingredients";

        recipeDiv.appendChild(ingredientsTitle);

        const ingredientsList = document.createElement("ul");

        for (const ingredient of recipe.ingredients){
            const ingredientItem = document.createElement("li");

            ingredientItem.innerText = ingredient;
            ingredientsList.append(ingredientItem);
        }
        recipeDiv.appendChild(ingredientsList);

        const instructionTitle = document.createElement("h3");
        instructionTitle.innerText = "Instruction";

        recipeDiv.appendChild(instructionTitle);

        const instructionsList = document.createElement("ol");

        for (const instruction of recipe.instructions){
            const instructionItem = document.createElement("li");
            instructionItem.innerText = instruction;
            instructionsList.append(instructionItem);

        }
        recipeDiv.appendChild(instructionsList);

        const tagsTitle = document.createElement("h3");
        tagsTitle.innerText = "Tags";
        recipeDiv.appendChild(tagsTitle);
        const tagsList = document.createElement("ul");

        for (const tag of recipe.tags){
            const tagItem = document.createElement("li");
            tagItem.innerText = tag;
            tagsList.append(tagItem);
        }
        recipeDiv.appendChild(tagsList);

        const mealTypeTitle = document.createElement("h3");
        mealTypeTitle.innerText = "Meal Type";
        recipeDiv.appendChild(mealTypeTitle);

        const mealTypesList = document.createElement("ul");

        for (const mealTypy of recipe.mealType) {
            const mealTypeItem = document.createElement("li");
            mealTypeItem.innerText = mealTypy;

            mealTypesList.append(mealTypeItem);
        }

        recipeDiv.appendChild(mealTypesList);

        const recipeImage = document.createElement("img");
        recipeImage.src = recipe.image;
        recipeImage.alt = recipe.name;

        recipeDiv.appendChild(recipeImage);

        recipesContainer.appendChild(recipeDiv);

    }



});