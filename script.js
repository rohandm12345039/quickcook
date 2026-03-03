const recipeData = {
  tomato: [
    {
      name: "Tomato Soup",
      ingredients: "Tomato, Onion, Garlic, Salt, Pepper",
      steps: "Boil tomatoes → Blend → Cook with spices → Serve hot",
      image: "https://images.unsplash.com/photo-1604908177522-4029c7f98b7c"
    },
    {
      name: "Tomato Pasta",
      ingredients: "Tomato, Pasta, Garlic, Olive oil",
      steps: "Cook pasta → Prepare tomato sauce → Mix and serve",
      image: "https://images.unsplash.com/photo-1525755662778-989d0524087e"
    }
  ],

  potato: [
    {
      name: "French Fries",
      ingredients: "Potato, Oil, Salt",
      steps: "Cut potatoes → Fry until golden → Season",
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877"
    },
    {
      name: "Aloo Paratha",
      ingredients: "Potato, Flour, Spices, Butter",
      steps: "Prepare potato stuffing → Fill dough → Cook on pan",
      image: "https://images.unsplash.com/photo-1617196038431-8b3a8c65c1dc"
    }
  ],

  egg: [
    {
      name: "Omelette",
      ingredients: "Eggs, Onion, Salt, Pepper",
      steps: "Beat eggs → Cook on pan → Fold and serve",
      image: "https://images.unsplash.com/photo-1584270354949-1e44699e9b97"
    },
    {
      name: "Boiled Egg Salad",
      ingredients: "Eggs, Onion, Tomato, Pepper",
      steps: "Boil eggs → Chop → Mix with veggies",
      image: "https://images.unsplash.com/photo-1606755962773-0f12a3b87a0c"
    }
  ],

  chicken: [
    {
      name: "Grilled Chicken",
      ingredients: "Chicken, Olive oil, Garlic, Spices",
      steps: "Marinate chicken → Grill until cooked → Serve hot",
      image: "https://images.unsplash.com/photo-1604908177522-4029c7f98b7c"
    },
    {
      name: "Chicken Curry",
      ingredients: "Chicken, Onion, Tomato, Spices",
      steps: "Cook onion & spices → Add chicken → Simmer with gravy",
      image: "https://images.unsplash.com/photo-1628294895950-9805252327bc"
    }
  ],

  paneer: [
    {
      name: "Paneer Butter Masala",
      ingredients: "Paneer, Tomato, Butter, Cream",
      steps: "Prepare gravy → Add paneer → Simmer",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7"
    },
    {
      name: "Paneer Bhurji",
      ingredients: "Paneer, Onion, Tomato, Spices",
      steps: "Sauté onion → Add paneer & spices → Cook",
      image: "https://images.unsplash.com/photo-1626082927489-0bfa4f8c4c30"
    }
  ]
};

function findRecipes() {
  const ingredient = document.getElementById("ingredient").value;
  const message = document.getElementById("message");
  const recipesDiv = document.getElementById("recipes");

  recipesDiv.innerHTML = "";

  if (ingredient === "") {
    message.textContent = "⚠️ Please select an ingredient first!";
    return;
  }

  message.textContent = `Showing recipes for "${ingredient}"...`;

  const recipes = recipeData[ingredient];

  recipes.forEach(recipe => {
    const card = document.createElement("div");
    card.className = "recipe-card";

    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}">
      <div class="content">
        <h3>${recipe.name}</h3>
        <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
        <p><strong>Steps:</strong> ${recipe.steps}</p>
      </div>
    `;

    recipesDiv.appendChild(card);
  });
}
