const recipeData = {
  tomato: [
    {
      name: "Classic Tomato Soup",
      ingredients: "4 ripe tomatoes, 1 onion, 2 cloves garlic, olive oil, salt & pepper, fresh basil",
      steps: "Heat olive oil in a pot and sauté diced onion until soft. Add minced garlic and cook for 1 minute. Add chopped tomatoes, salt, and pepper, then simmer for 20 minutes. Blend until smooth, garnish with basil, and serve hot.",
      image: "https://images.unsplash.com/photo-1604908554164-f3c6b4b75f07"
    },
    {
      name: "Bruschetta",
      ingredients: "3 tomatoes, fresh basil, garlic, baguette slices, olive oil, balsamic vinegar",
      steps: "Dice tomatoes and mix with chopped basil, minced garlic, olive oil, and balsamic vinegar. Toast baguette slices until golden. Spoon the tomato mixture onto each slice and serve immediately.",
      image: "https://images.unsplash.com/photo-1604908177522-4029c7f98b7c"
    }
  ],

  potato: [
    {
      name: "Crispy Potato Wedges",
      ingredients: "3 potatoes, olive oil, paprika, garlic powder, salt",
      steps: "Preheat oven to 220°C. Cut potatoes into wedges and toss with olive oil and spices. Spread on a baking sheet in a single layer. Bake for 30–35 minutes until golden and crispy.",
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877"
    },
    {
      name: "Herb Roasted Potatoes",
      ingredients: "Potatoes, olive oil, rosemary, garlic, salt & pepper",
      steps: "Preheat oven to 200°C. Cut potatoes into bite-sized pieces. Toss with olive oil, rosemary, garlic, salt, and pepper. Roast for 35–40 minutes until golden and crispy.",
      image: "https://9bedc64c-40fb-45aa-888f-7212918430c0.lovableproject.com/src/assets/roasted-potatoes.jpg"
    }
  ],

  egg: [
    {
      name: "French Omelette",
      ingredients: "3 eggs, butter, salt & pepper, fresh herbs",
      steps: "Whisk eggs with salt and pepper. Melt butter in a non-stick pan over medium heat. Pour in eggs and gently stir while tilting the pan. When just set, fold omelette, garnish with herbs, and serve.",
      image: "https://images.unsplash.com/photo-1510693206972-df098062cb71?w=400&h=300&fit=crop"
    },
    {
      name: "Egg Fried Rice",
      ingredients: "2 eggs, cooked rice, soy sauce, green onions, sesame oil, peas & carrots",
      steps: "Heat sesame oil in a wok. Scramble eggs and push to the side. Add rice and vegetables, stir-fry for 3 minutes. Add soy sauce, toss well, and garnish with green onions.",
      image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop"
    }
  ],

  chicken: [
    {
      name: "Butter Chicken",
      ingredients: "Chicken, tomato puree, cream, butter, garam masala, ginger-garlic paste",
      steps: "Marinate chicken in yogurt and spices for 30 minutes. Cook chicken in butter until golden. Add ginger-garlic paste, tomato puree, and spices. Stir in cream, add chicken back, simmer for 15 minutes, and serve hot.",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop"
    },
    {
      name: "Grilled Chicken Salad",
      ingredients: "Chicken breasts, mixed greens, cherry tomatoes, cucumber, olive oil, lemon juice",
      steps: "Season chicken with salt, pepper, and olive oil. Grill for 6–7 minutes per side until cooked. Slice chicken and arrange over mixed greens and vegetables. Drizzle with lemon-olive oil dressing and serve.",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
    }
  ],

  paneer: [
    {
      name: "Paneer Tikka",
      ingredients: "Paneer, yogurt, bell peppers, onion, tikka masala, lemon juice",
      steps: "Cube paneer and vegetables and marinate in spiced yogurt for 1 hour. Thread onto skewers alternating paneer and veggies. Grill or bake at 200°C for 15–20 minutes. Squeeze lemon juice and serve with mint chutney.",
      image: "https://images.unsplash.com/photo-1626082927489-0bfa4f8c4c30"
    },
    {
      name: "Palak Paneer",
      ingredients: "Paneer, spinach, onion, tomato, cream, cumin, garam masala",
      steps: "Blanch spinach and blend into a smooth puree. Sauté paneer cubes until golden and set aside. Cook onion and tomato with spices until soft. Add spinach puree and paneer, simmer with cream for 10 minutes, and serve.",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7"
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

  recipeData[ingredient].forEach(recipe => {
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
