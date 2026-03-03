const recipeData = {
  tomato: [
    {
      name: "Classic Tomato Soup",
      ingredients: "4 ripe tomatoes, 1 onion, 2 cloves garlic, olive oil, salt & pepper, fresh basil",
      steps: [
        "Heat olive oil in a pot and sauté diced onion until soft.",
        "Add minced garlic and cook for 1 minute.",
        "Add chopped tomatoes, salt, and pepper. Simmer for 20 minutes.",
        "Blend until smooth, garnish with basil, and serve hot."
      ],
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop"
    },
    {
      name: "Bruschetta",
      ingredients: "3 tomatoes, fresh basil, garlic, baguette slices, olive oil, balsamic vinegar",
      steps: [
        "Dice tomatoes and mix with chopped basil, minced garlic, olive oil, and balsamic vinegar.",
        "Toast baguette slices until golden.",
        "Spoon the tomato mixture onto each slice.",
        "Serve immediately as an appetizer."
      ],
      image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=300&fit=crop"
    }
  ],

  potato: [
    {
      name: "Crispy Potato Wedges",
      ingredients: "3 potatoes, olive oil, paprika, garlic powder, salt",
      steps: [
        "Preheat oven to 220°C.",
        "Cut potatoes into wedges.",
        "Toss with olive oil and spices.",
        "Bake for 30–35 minutes until crispy."
      ],
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop"
    },
    {
      name: "Herb Roasted Potatoes",
      ingredients: "Potatoes, olive oil, rosemary, garlic, salt & pepper",
      steps: [
        "Preheat oven to 200°C.",
        "Cut potatoes into bite-sized pieces.",
        "Toss with olive oil, rosemary, garlic, salt, and pepper.",
        "Roast for 35–40 minutes until golden and crispy."
      ],
      image: "https://plus.unsplash.com/premium_photo-1695224545124-3ef48642ec92?w=600&auto=format&fit=crop&q=60"
    }
  ],

  egg: [
    {
      name: "French Omelette",
      ingredients: "3 eggs, butter, salt & pepper, fresh herbs",
      steps: [
        "Whisk eggs with salt and pepper.",
        "Melt butter in a non-stick pan.",
        "Pour eggs and gently stir.",
        "Fold omelette, garnish with herbs, and serve."
      ],
      image: "https://images.unsplash.com/photo-1510693206972-df098062cb71?w=400&h=300&fit=crop"
    },
    {
      name: "Egg Fried Rice",
      ingredients: "2 eggs, cooked rice, soy sauce, green onions, sesame oil, peas & carrots",
      steps: [
        "Heat sesame oil in a wok.",
        "Scramble eggs and push aside.",
        "Add rice and vegetables, stir-fry.",
        "Add soy sauce, toss, and serve."
      ],
      image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop"
    }
  ],

  chicken: [
    {
      name: "Butter Chicken",
      ingredients: "Chicken, tomato puree, cream, butter, garam masala, ginger-garlic paste",
      steps: [
        "Marinate chicken in yogurt and spices.",
        "Cook chicken in butter until golden.",
        "Add tomato puree and spices.",
        "Add cream, simmer, and serve."
      ],
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop"
    },
    {
      name: "Grilled Chicken Salad",
      ingredients: "Chicken breasts, mixed greens, cherry tomatoes, cucumber, olive oil, lemon juice",
      steps: [
        "Season chicken with salt and olive oil.",
        "Grill chicken until cooked.",
        "Slice and place over vegetables.",
        "Drizzle dressing and serve."
      ],
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
    }
  ],

  paneer: [
    {
      name: "Paneer Tikka",
      ingredients: "Paneer, yogurt, bell peppers, onion, tikka masala, lemon juice",
      steps: [
        "Marinate paneer and vegetables in spiced yogurt.",
        "Thread paneer and veggies onto skewers.",
        "Grill or bake at 200°C for 15–20 minutes.",
        "Squeeze lemon juice and serve."
      ],
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop"
    },
    {
      name: "Palak Paneer",
      ingredients: "Paneer, spinach, onion, tomato, cream, cumin, garam masala",
      steps: [
        "Blanch spinach and blend into puree.",
        "Fry paneer cubes and set aside.",
        "Cook onion and tomato with spices.",
        "Add spinach puree, paneer, cream, and simmer."
      ],
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop"
    }
  ]
};

function findRecipes() {
  const ingredient = document.getElementById("ingredient").value;
  const message = document.getElementById("message");
  const recipesDiv = document.getElementById("recipes");

  recipesDiv.innerHTML = "";

  if (!ingredient) {
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

        <h4>Instructions</h4>
        <ol>
          ${recipe.steps.map(step => `<li>${step}</li>`).join("")}
        </ol>
      </div>
    `;

    recipesDiv.appendChild(card);
  });
}
