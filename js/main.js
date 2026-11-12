
// JS of the toggle button 
var menuButton = document.getElementById("mobile-menu-btn");
var mobileMenu = document.getElementById("mobile-menu");
var menuIcon = document.getElementById("menu-icon");

menuButton.addEventListener("click", function () {

    // Toggle mobile menu visibility
    mobileMenu.classList.toggle("d-none");

    // Toggle hamburger and close icons
    // menuIcon.classList.toggle("fa-bars");
    // menuIcon.classList.toggle("fa-xmark");

    // Update accessibility attribute
    var isExpanded = !mobileMenu.classList.contains("d-none");

    menuButton.setAttribute("aria-expanded", isExpanded);

});


// Recipe Object structure 

var recipe_01 = {
    recipeName : "Chicken Tikka Masala",
    recipeDesc : "Rich and creamy Indian curry with tender chicken pieces", 
    recipeImage : "./imgs/recipe-01.avif", 
    rate : {
        stars: 4.7,
        reviews: 389 
    }, 
    classification: {
        level: "Intermediate", // ["easy", "intermediate", "hard"],
        category: "Asian"  //["Italian" , "American" , "Asian" , "Mediterranean" , "Seafood" , "European", "Middle Eastern", "Fast Food", "African"]
    },
    prepTime:"20 min",
    cookTime:"30 min",
    servings:"4 people",
    ingredients : ["600g chicken breast, cubed", 
                    "1 cup plain yogurt",
                    "2 tablespoons tikka masala paste",
                    "400ml coconut cream",
                    "1 onion, diced",
                    "4 cloves garlic, minced",
                    "2 tablespoons ginger, grated",
                    "400g canned tomatoes",
                    "Fresh cilantro for garnish"
    ],
    instructions : [
                "Marinate chicken in half the yogurt and 1 tablespoon tikka paste for at least 30 minutes.",
                "Heat oil in a large pan, cook marinated chicken until browned. Remove and set aside.",
                "In the same pan, sauté onion until soft. Add garlic and ginger, cook for 1 minute.",
                "Add remaining tikka paste and canned tomatoes. Simmer for 10 minutes.",
                "Stir in coconut cream and remaining yogurt. Add chicken back to the pan.",
                "Simmer for 15 minutes until sauce thickens. Garnish with cilantro and serve with rice."
    ],
    nutrition : {
                calories: "450 kcal",
                protein: "38g",
                carbohydrates: "24g",
                fat: "22g",
                fiber: "4g",
                sodium: "760mg"
    },
    chefTips : [
            "Marinate chicken overnight for deeper flavor",
            "Use full-fat coconut cream for richest sauce",
            "Adjust spice level by varying the tikka paste amount",
            "Serve with naan bread and basmati rice"
    ],
    extendedPrepTime: true
};


// Array of All Recipes 

var recipesData = [
    {
        recipeName: "Chicken Tikka Masala",
        recipeDesc: "Rich and creamy Indian curry with tender chicken pieces",
        recipeImage: "./imgs/recipe_01.jpg",
        rate: { stars: 4.8, reviews: 158 },
        classification: {
            level: "Intermediate",
            category: "Asian"
        },
        prepTime: "13 min",
        cookTime: "22 min",
        servings: "3 people",
        ingredients: [
            "600g chicken breast, cubed",
            "1 cup plain yogurt",
            "2 tbsp tikka masala paste",
            "400ml coconut cream",
            "1 onion, diced",
            "2 cloves garlic, minced",
            "1 tbsp grated ginger",
            "400g canned tomatoes"
        ],
        instructions: [
            "Marinate chicken with half the yogurt and tikka paste for 30 minutes.",
            "Brown the chicken in a hot oiled pan, then set aside.",
            "Sauté onion, garlic and ginger; add remaining paste and tomatoes and simmer for 10 minutes.",
            "Stir in coconut cream and remaining yogurt, return chicken and simmer until cooked through."
        ],
        nutrition: {
            calories: "337 kcal",
            protein: "21g",
            carbohydrates: "25g",
            fat: "12g",
            fiber: "3g",
            sodium: "457mg"
        },
        chefTips: [
            "Serve with basmati rice and fresh cilantro.",
            "Marinate overnight for deeper flavor."
        ],
        extendedPrepTime: false
    },
    {
        recipeName: "Spaghetti Carbonara",
        recipeDesc: "Classic Italian pasta tossed with a silky egg, cheese and pancetta sauce",
        recipeImage: "./imgs/recipe_02.jpg",
        rate: { stars: 4.6, reviews: 231 },
        classification: {
            level: "Intermediate",
            category: "European"
        },
        prepTime: "16 min",
        cookTime: "29 min",
        servings: "4 people",
        ingredients: [
            "400g spaghetti",
            "150g pancetta, diced",
            "2 eggs",
            "2 egg yolks",
            "¾ cup grated Parmesan",
            "Black pepper"
        ],
        instructions: [
            "Cook spaghetti in salted water until al dente; reserve some pasta water.",
            "Crisp pancetta in a pan and remove from the heat.",
            "Whisk eggs, yolks, Parmesan and black pepper.",
            "Toss hot pasta with pancetta and egg mixture, loosening with pasta water."
        ],
        nutrition: {
            calories: "354 kcal",
            protein: "24g",
            carbohydrates: "30g",
            fat: "14g",
            fiber: "4g",
            sodium: "494mg"
        },
        chefTips: [
            "Serve immediately with extra Parmesan.",
            "Keep the pan off the heat when adding eggs to avoid scrambling."
        ],
        extendedPrepTime: false
    },
    {
        recipeName: "Sushi Rolls",
        recipeDesc: "Fresh sushi rolls filled with seasoned rice, cucumber and salmon",
        recipeImage: "./imgs/recipe_03.jpg",
        rate: { stars: 4.4, reviews: 304 },
        classification: {
            level: "Hard",
            category: "Asian"
        },
        prepTime: "19 min",
        cookTime: "36 min",
        servings: "5 people",
        ingredients: [
            "2 cups sushi rice",
            "3 tbsp rice vinegar",
            "4 nori sheets",
            "200g sushi-grade salmon",
            "1 cucumber, sliced",
            "1 avocado, sliced"
        ],
        instructions: [
            "Rinse and cook sushi rice; season with rice vinegar and cool.",
            "Place nori on a bamboo mat and spread a thin layer of rice over it.",
            "Add salmon, cucumber and avocado in a line.",
            "Roll tightly, slice with a wet sharp knife and serve."
        ],
        nutrition: {
            calories: "371 kcal",
            protein: "27g",
            carbohydrates: "35g",
            fat: "16g",
            fiber: "5g",
            sodium: "531mg"
        },
        chefTips: [
            "Serve with soy sauce, wasabi and pickled ginger.",
            "Keep your hands damp when handling sushi rice."
        ],
        extendedPrepTime: false
    },
    {
        recipeName: "Greek Salad",
        recipeDesc: "Crisp Mediterranean salad with cucumber, tomato, olives and feta",
        recipeImage: "./imgs/recipe_04.jpeg",
        rate: { stars: 4.2, reviews: 377 },
        classification: {
            level: "Easy",
            category: "Mediterranean"
        },
        prepTime: "22 min",
        cookTime: "43 min",
        servings: "6 people",
        ingredients: [
            "2 cucumbers, chopped",
            "3 tomatoes, wedged",
            "½ red onion, sliced",
            "½ cup Kalamata olives",
            "150g feta cheese",
            "2 tbsp olive oil",
            "1 tsp dried oregano"
        ],
        instructions: [
            "Chop cucumber and tomatoes into bite-size pieces.",
            "Add red onion and olives to a serving bowl.",
            "Top with feta, olive oil and oregano.",
            "Toss gently just before serving."
        ],
        nutrition: {
            calories: "388 kcal",
            protein: "30g",
            carbohydrates: "40g",
            fat: "18g",
            fiber: "6g",
            sodium: "568mg"
        },
        chefTips: [
            "Serve chilled with warm pita bread.",
            "Use ripe tomatoes and good-quality feta."
        ],
        extendedPrepTime: true
    },
    {
        recipeName: "Margherita Pizza",
        recipeDesc: "Thin-crust pizza topped with tomato, mozzarella and fresh basil",
        recipeImage: "./imgs/recipe_05.jpeg",
        rate: { stars: 4.9, reviews: 450 },
        classification: {
            level: "Intermediate",
            category: "Italian"
        },
        prepTime: "25 min",
        cookTime: "50 min",
        servings: "2 people",
        ingredients: [
            "1 pizza dough ball",
            "½ cup tomato passata",
            "200g fresh mozzarella",
            "Fresh basil leaves",
            "1 tbsp olive oil",
            "½ tsp salt"
        ],
        instructions: [
            "Heat the oven and a pizza stone or tray to a high temperature.",
            "Stretch the dough into a thin round.",
            "Spread passata, add mozzarella and drizzle with olive oil.",
            "Bake until the crust is golden; finish with fresh basil."
        ],
        nutrition: {
            calories: "405 kcal",
            protein: "33g",
            carbohydrates: "45g",
            fat: "20g",
            fiber: "7g",
            sodium: "605mg"
        },
        chefTips: [
            "Serve hot with a simple green salad.",
            "Avoid adding too much sauce so the crust stays crisp."
        ],
        extendedPrepTime: false
    },
    {
        recipeName: "Grilled Steak",
        recipeDesc: "Juicy grilled steak seasoned simply and finished with herbs",
        recipeImage: "./imgs/recipe_06.jpeg",
        rate: { stars: 4.7, reviews: 523 },
        classification: {
            level: "Intermediate",
            category: "American"
        },
        prepTime: "28 min",
        cookTime: "57 min",
        servings: "3 people",
        ingredients: [
            "2 ribeye steaks",
            "1 tbsp olive oil",
            "1 tsp salt",
            "½ tsp black pepper",
            "2 garlic cloves, crushed",
            "1 tbsp butter",
            "Fresh rosemary"
        ],
        instructions: [
            "Bring steaks close to room temperature and pat dry.",
            "Rub with oil, salt and pepper.",
            "Sear on a hot grill or pan to your preferred doneness, turning once.",
            "Rest for 5–10 minutes with butter, garlic and rosemary."
        ],
        nutrition: {
            calories: "422 kcal",
            protein: "36g",
            carbohydrates: "50g",
            fat: "22g",
            fiber: "8g",
            sodium: "642mg"
        },
        chefTips: [
            "Slice across the grain and serve with vegetables.",
            "Use a meat thermometer for consistent doneness."
        ],
        extendedPrepTime: false
    },
    {
        recipeName: "Chicken Shawarma",
        recipeDesc: "Spiced chicken shawarma wrapped with vegetables and creamy sauce",
        recipeImage: "./imgs/recipe_07.jpg",
        rate: { stars: 4.5, reviews: 596 },
        classification: {
            level: "Intermediate",
            category: "Middle Eastern"
        },
        prepTime: "31 min",
        cookTime: "18 min",
        servings: "4 people",
        ingredients: [
            "600g boneless chicken thighs",
            "3 tbsp yogurt",
            "2 tbsp lemon juice",
            "2 tsp shawarma spice",
            "2 garlic cloves, minced",
            "4 flatbreads",
            "Tomato and cucumber"
        ],
        instructions: [
            "Mix yogurt, lemon, garlic and shawarma spice; coat the chicken.",
            "Marinate for at least 30 minutes.",
            "Cook chicken in a hot pan until browned and cooked through.",
            "Slice thinly and wrap in flatbread with vegetables and sauce."
        ],
        nutrition: {
            calories: "439 kcal",
            protein: "39g",
            carbohydrates: "55g",
            fat: "24g",
            fiber: "9g",
            sodium: "679mg"
        },
        chefTips: [
            "Add pickles and garlic sauce before wrapping.",
            "Slice the chicken thinly for an authentic shawarma texture."
        ],
        extendedPrepTime: false
    },
    {
        recipeName: "Pad Thai",
        recipeDesc: "Thai stir-fried rice noodles with shrimp, egg and tangy sauce",
        recipeImage: "./imgs/recipe_08.jpg",
        rate: { stars: 4.3, reviews: 669 },
        classification: {
            level: "Intermediate",
            category: "Asian"
        },
        prepTime: "34 min",
        cookTime: "25 min",
        servings: "5 people",
        ingredients: [
            "200g rice noodles",
            "200g shrimp",
            "2 eggs",
            "2 tbsp tamarind paste",
            "1 tbsp fish sauce",
            "1 tbsp brown sugar",
            "Bean sprouts",
            "Crushed peanuts"
        ],
        instructions: [
            "Soak rice noodles until pliable and drain.",
            "Mix tamarind, fish sauce and brown sugar into a sauce.",
            "Stir-fry shrimp, add eggs and scramble lightly.",
            "Add noodles and sauce; toss until tender and finish with sprouts and peanuts."
        ],
        nutrition: {
            calories: "456 kcal",
            protein: "42g",
            carbohydrates: "60g",
            fat: "26g",
            fiber: "2g",
            sodium: "716mg"
        },
        chefTips: [
            "Serve with lime wedges and fresh cilantro.",
            "Prepare all ingredients before heating the wok."
        ],
        extendedPrepTime: true
    },
    {
        recipeName: "Vegetable Stir-Fry",
        recipeDesc: "Colorful vegetables quickly cooked in a savory garlic-soy sauce",
        recipeImage: "./imgs/recipe_09.jpg",
        rate: { stars: 4.1, reviews: 742 },
        classification: {
            level: "Easy",
            category: "Asian"
        },
        prepTime: "11 min",
        cookTime: "32 min",
        servings: "6 people",
        ingredients: [
            "1 red bell pepper, sliced",
            "1 broccoli head, florets",
            "1 carrot, sliced",
            "150g snap peas",
            "2 tbsp soy sauce",
            "2 garlic cloves",
            "1 tsp sesame oil"
        ],
        instructions: [
            "Prepare and slice all vegetables evenly.",
            "Heat oil in a wok and stir-fry garlic briefly.",
            "Add firm vegetables first, then softer vegetables.",
            "Add soy sauce and sesame oil; toss until crisp-tender."
        ],
        nutrition: {
            calories: "473 kcal",
            protein: "45g",
            carbohydrates: "65g",
            fat: "28g",
            fiber: "3g",
            sodium: "753mg"
        },
        chefTips: [
            "Serve over steamed rice or noodles.",
            "Keep the pan very hot and avoid overcrowding it."
        ],
        extendedPrepTime: false
    },
    {
        recipeName: "Beef Bourguignon",
        recipeDesc: "Slow-braised beef stew with red wine, mushrooms and carrots",
        recipeImage: "./imgs/recipe_10.jpeg",
        rate: { stars: 4.8, reviews: 815 },
        classification: {
            level: "Hard",
            category: "European"
        },
        prepTime: "14 min",
        cookTime: "39 min",
        servings: "2 people",
        ingredients: [
            "800g beef chuck, cubed",
            "150g bacon, diced",
            "1 onion, chopped",
            "2 carrots, sliced",
            "250g mushrooms",
            "2 cups beef stock",
            "1 cup red wine",
            "1 tbsp tomato paste"
        ],
        instructions: [
            "Brown beef in batches and set aside.",
            "Cook bacon, onion and carrots in the same pot.",
            "Stir in tomato paste, wine and stock; return beef to the pot.",
            "Cover and braise gently until beef is tender; add mushrooms near the end."
        ],
        nutrition: {
            calories: "490 kcal",
            protein: "48g",
            carbohydrates: "24g",
            fat: "30g",
            fiber: "4g",
            sodium: "790mg"
        },
        chefTips: [
            "Serve with mashed potatoes or crusty bread.",
            "Brown the beef in batches to build a rich base."
        ],
        extendedPrepTime: false
    },
        {
        recipeName: "Fish and Chips",
        recipeDesc: "Crispy battered fish served with golden fries",
        recipeImage: "./imgs/recipe_11.jpg",
        rate: { stars: 4.6, reviews: 888 },
        classification: { level: "Intermediate", category: "European" },
        prepTime: "17 min",
        cookTime: "46 min",
        servings: "3 people",
        ingredients: [
            "2 white fish fillets",
            "1 cup flour",
            "¾ cup cold sparkling water",
            "4 potatoes, cut into chips",
            "Oil for frying",
            "Salt and lemon"
        ],
        instructions: [
            "Soak cut potatoes in cold water, then dry thoroughly.",
            "Fry potatoes until tender and pale; drain.",
            "Whisk flour with sparkling water to make a light batter.",
            "Dip fish in batter and fry until crisp and cooked; finish the chips."
        ],
        nutrition: {
            calories: "507 kcal",
            protein: "20g",
            carbohydrates: "29g",
            fat: "32g",
            fiber: "5g",
            sodium: "827mg"
        },
        chefTips: [
            "Serve with lemon wedges and tartar sauce.",
            "Keep the batter cold for a lighter, crisp coating."
        ],
        extendedPrepTime: false
    },
    {
        recipeName: "Tacos",
        recipeDesc: "Soft tacos filled with seasoned beef, salsa and fresh toppings",
        recipeImage: "./imgs/recipe_12.jpg",
        rate: { stars: 4.4, reviews: 961 },
        classification: { level: "Easy", category: "Mexican" },
        prepTime: "20 min",
        cookTime: "53 min",
        servings: "4 people",
        ingredients: [
            "500g ground beef",
            "8 small tortillas",
            "1 tbsp taco seasoning",
            "1 tomato, diced",
            "½ onion, diced",
            "Shredded lettuce",
            "½ cup grated cheese"
        ],
        instructions: [
            "Brown ground beef in a skillet and drain excess fat.",
            "Add taco seasoning and a splash of water; simmer briefly.",
            "Warm tortillas in a dry pan.",
            "Fill tortillas with beef, lettuce, tomato, onion and cheese."
        ],
        nutrition: {
            calories: "524 kcal",
            protein: "23g",
            carbohydrates: "34g",
            fat: "34g",
            fiber: "6g",
            sodium: "864mg"
        },
        chefTips: [
            "Offer lime wedges and salsa on the side.",
            "Warm tortillas just before serving so they stay flexible."
        ],
        extendedPrepTime: true
    },
    {
        recipeName: "Cheeseburger",
        recipeDesc: "Classic beef burger with melted cheese, lettuce and tomato",
        recipeImage: "./imgs/recipe_13.jpg",
        rate: { stars: 4.2, reviews: 114 },
        classification: { level: "Easy", category: "American" },
        prepTime: "23 min",
        cookTime: "60 min",
        servings: "5 people",
        ingredients: [
            "500g ground beef",
            "4 burger buns",
            "4 cheddar slices",
            "1 tomato, sliced",
            "Lettuce leaves",
            "½ onion, sliced",
            "Salt and pepper"
        ],
        instructions: [
            "Shape beef into four patties and season both sides.",
            "Grill or pan-fry until cooked to your preference.",
            "Add cheese during the final minute to melt.",
            "Toast buns and assemble with lettuce, tomato, onion and patties."
        ],
        nutrition: {
            calories: "541 kcal",
            protein: "26g",
            carbohydrates: "39g",
            fat: "11g",
            fiber: "7g",
            sodium: "901mg"
        },
        chefTips: [
            "Serve with oven fries and pickles.",
            "Handle the meat gently to keep patties tender."
        ],
        extendedPrepTime: false
    },
    {
        recipeName: "Lasagna",
        recipeDesc: "Layered pasta bake with rich meat sauce and creamy béchamel",
        recipeImage: "./imgs/recipe_14.jpg",
        rate: { stars: 4.9, reviews: 187 },
        classification: { level: "Hard", category: "Italian" },
        prepTime: "26 min",
        cookTime: "21 min",
        servings: "6 people",
        ingredients: [
            "9 lasagna sheets",
            "500g ground beef",
            "2 cups tomato sauce",
            "1 onion, diced",
            "2 cups béchamel",
            "1½ cups mozzarella",
            "½ cup Parmesan"
        ],
        instructions: [
            "Cook onion and beef until browned; stir in tomato sauce and simmer.",
            "Spread a little sauce in a baking dish and add pasta sheets.",
            "Layer meat sauce, béchamel and cheese; repeat the layers.",
            "Bake until bubbling and golden, then rest before slicing."
        ],
        nutrition: {
            calories: "558 kcal",
            protein: "29g",
            carbohydrates: "44g",
            fat: "13g",
            fiber: "8g",
            sodium: "938mg"
        },
        chefTips: [
            "Serve with a green salad and garlic bread.",
            "Let the lasagna rest for 10–15 minutes before cutting."
        ],
        extendedPrepTime: false
    },
    {
        recipeName: "Mac and Cheese",
        recipeDesc: "Creamy baked macaroni with a golden cheddar topping",
        recipeImage: "./imgs/recipe_15.jpg",
        rate: { stars: 4.7, reviews: 260 },
        classification: { level: "Easy", category: "American" },
        prepTime: "29 min",
        cookTime: "28 min",
        servings: "2 people",
        ingredients: [
            "300g macaroni",
            "2 tbsp butter",
            "2 tbsp flour",
            "2 cups milk",
            "2 cups grated cheddar",
            "½ tsp mustard powder",
            "½ cup breadcrumbs"
        ],
        instructions: [
            "Boil macaroni until just al dente and drain.",
            "Melt butter, stir in flour and cook for one minute.",
            "Whisk in milk until thick; add cheddar and mustard.",
            "Fold in pasta, top with breadcrumbs and bake until golden."
        ],
        nutrition: {
            calories: "575 kcal",
            protein: "32g",
            carbohydrates: "49g",
            fat: "15g",
            fiber: "9g",
            sodium: "975mg"
        },
        chefTips: [
            "Add a pinch of paprika for color and warmth.",
            "Grate cheese yourself for a smoother sauce."
        ],
        extendedPrepTime: false
    },
    {
        recipeName: "Falafel",
        recipeDesc: "Crispy herb-packed chickpea fritters with a tender center",
        recipeImage: "./imgs/recipe_16.jpg",
        rate: { stars: 4.5, reviews: 333 },
        classification: { level: "Intermediate", category: "Middle Eastern" },
        prepTime: "32 min",
        cookTime: "35 min",
        servings: "3 people",
        ingredients: [
            "2 cups dried chickpeas, soaked",
            "½ onion",
            "3 garlic cloves",
            "1 cup parsley and cilantro",
            "1 tsp cumin",
            "½ tsp coriander",
            "2 tbsp flour",
            "Oil for frying"
        ],
        instructions: [
            "Drain soaked chickpeas very well.",
            "Pulse chickpeas, onion, garlic, herbs and spices until coarse.",
            "Mix in flour and chill the mixture for 30 minutes.",
            "Shape into balls and fry until crisp and deep golden."
        ],
        nutrition: {
            calories: "592 kcal",
            protein: "35g",
            carbohydrates: "54g",
            fat: "17g",
            fiber: "2g",
            sodium: "1012mg"
        },
        chefTips: [
            "Serve in pita with tahini, salad and pickles.",
            "Use dried soaked chickpeas rather than canned for best texture."
        ],
        extendedPrepTime: true
    },
    {
        recipeName: "Hummus",
        recipeDesc: "Smooth chickpea dip blended with tahini, lemon and garlic",
        recipeImage: "./imgs/recipe_17.jpg",
        rate: { stars: 4.3, reviews: 406 },
        classification: { level: "Easy", category: "Middle Eastern" },
        prepTime: "35 min",
        cookTime: "42 min",
        servings: "4 people",
        ingredients: [
            "2 cups cooked chickpeas",
            "¼ cup tahini",
            "2 tbsp lemon juice",
            "1 garlic clove",
            "3 tbsp cold water",
            "2 tbsp olive oil",
            "½ tsp cumin"
        ],
        instructions: [
            "Add chickpeas, tahini, lemon and garlic to a food processor.",
            "Blend while slowly adding cold water.",
            "Season with cumin and salt; blend until very smooth.",
            "Spoon into a bowl and finish with olive oil."
        ],
        nutrition: {
            calories: "609 kcal",
            protein: "38g",
            carbohydrates: "59g",
            fat: "19g",
            fiber: "3g",
            sodium: "1049mg"
        },
        chefTips: [
            "Garnish with paprika, parsley or whole chickpeas.",
            "Peel chickpeas for an extra-silky hummus."
        ],
        extendedPrepTime: false
    },
    {
        recipeName: "Caesar Salad",
        recipeDesc: "Crisp romaine lettuce with Parmesan, croutons and Caesar dressing",
        recipeImage: "./imgs/recipe_18.jpg",
        rate: { stars: 4.1, reviews: 479 },
        classification: { level: "Easy", category: "American" },
        prepTime: "12 min",
        cookTime: "49 min",
        servings: "5 people",
        ingredients: [
            "2 romaine lettuce hearts",
            "1 cup croutons",
            "½ cup Parmesan shavings",
            "¼ cup mayonnaise",
            "1 tbsp lemon juice",
            "1 tsp Dijon mustard",
            "1 garlic clove"
        ],
        instructions: [
            "Wash, dry and chop the romaine lettuce.",
            "Whisk mayonnaise, lemon, mustard and garlic into a dressing.",
            "Toss lettuce with dressing until lightly coated.",
            "Top with croutons and Parmesan shavings."
        ],
        nutrition: {
            calories: "626 kcal",
            protein: "41g",
            carbohydrates: "64g",
            fat: "21g",
            fiber: "4g",
            sodium: "436mg"
        },
        chefTips: [
            "Add grilled chicken for a more filling meal.",
            "Dry the lettuce thoroughly so the dressing clings."
        ],
        extendedPrepTime: false
    },
    {
        recipeName: "Veggie Pizza",
        recipeDesc: "Colorful vegetable pizza with mozzarella and tomato sauce",
        recipeImage: "./imgs/recipe_19.jpg",
        rate: { stars: 4.8, reviews: 552 },
        classification: { level: "Intermediate", category: "Italian" },
        prepTime: "15 min",
        cookTime: "56 min",
        servings: "6 people",
        ingredients: [
            "1 pizza dough ball",
            "½ cup tomato sauce",
            "150g mozzarella",
            "½ bell pepper, sliced",
            "½ zucchini, sliced",
            "¼ red onion",
            "Black olives"
        ],
        instructions: [
            "Heat the oven to a high temperature.",
            "Stretch dough onto a lightly floured tray.",
            "Spread tomato sauce and arrange cheese and vegetables.",
            "Bake until the crust is crisp and cheese is bubbling."
        ],
        nutrition: {
            calories: "643 kcal",
            protein: "44g",
            carbohydrates: "23g",
            fat: "23g",
            fiber: "5g",
            sodium: "473mg"
        },
        chefTips: [
            "Finish with basil and a drizzle of olive oil.",
            "Pre-cook watery vegetables if needed to prevent a soggy crust."
        ],
        extendedPrepTime: false
    },
    {
        recipeName: "Chicken Parmesan",
        recipeDesc: "Breaded chicken topped with marinara and melted mozzarella",
        recipeImage: "./imgs/recipe_20.jpg",
        rate: { stars: 4.6, reviews: 625 },
        classification: { level: "Intermediate", category: "Italian" },
        prepTime: "18 min",
        cookTime: "17 min",
        servings: "2 people",
        ingredients: [
            "2 chicken breasts",
            "½ cup flour",
            "1 egg, beaten",
            "1 cup breadcrumbs",
            "1 cup marinara sauce",
            "1 cup mozzarella",
            "¼ cup Parmesan"
        ],
        instructions: [
            "Flatten chicken breasts to an even thickness.",
            "Coat in flour, egg and breadcrumbs.",
            "Pan-fry until golden, then place in a baking dish.",
            "Top with marinara and cheeses; bake until chicken is cooked and cheese melts."
        ],
        nutrition: {
            calories: "660 kcal",
            protein: "47g",
            carbohydrates: "28g",
            fat: "25g",
            fiber: "6g",
            sodium: "510mg"
        },
        chefTips: [
            "Serve with spaghetti or a fresh salad.",
            "Pound chicken evenly so it cooks at the same rate."
        ],
        extendedPrepTime: true
    },
    {
        recipeName: "Thai Green Curry",
        recipeDesc: "Fragrant coconut curry with green curry paste and vegetables",
        recipeImage: "./imgs/recipe_21.jpg",
        rate: { stars: 4.4, reviews: 698 },
        classification: { level: "Intermediate", category: "Asian" },
        prepTime: "21 min",
        cookTime: "24 min",
        servings: "3 people",
        ingredients: [
            "2 tbsp green curry paste",
            "400ml coconut milk",
            "300g chicken or tofu",
            "1 zucchini, sliced",
            "1 red bell pepper",
            "100g green beans",
            "Thai basil"
        ],
        instructions: [
            "Warm a spoonful of coconut cream in a pot.",
            "Stir in green curry paste until fragrant.",
            "Add protein and remaining coconut milk; simmer until nearly cooked.",
            "Add vegetables and simmer until tender; finish with basil."
        ],
        nutrition: {
            calories: "677 kcal",
            protein: "19g",
            carbohydrates: "33g",
            fat: "27g",
            fiber: "7g",
            sodium: "547mg"
        },
        chefTips: [
            "Serve with jasmine rice and lime.",
            "Fry the curry paste briefly to release its aroma."
        ],
        extendedPrepTime: false
    },
    {
        recipeName: "Sashimi",
        recipeDesc: "Delicate slices of fresh salmon and tuna served simply",
        recipeImage: "./imgs/recipe_22.jpg",
        rate: { stars: 4.2, reviews: 771 },
        classification: { level: "Hard", category: "Asian" },
        prepTime: "24 min",
        cookTime: "31 min",
        servings: "4 people",
        ingredients: [
            "200g sushi-grade salmon",
            "200g sushi-grade tuna",
            "Daikon, finely sliced",
            "Pickled ginger",
            "Wasabi",
            "Soy sauce",
            "Fresh lemon"
        ],
        instructions: [
            "Keep the fish very cold until ready to prepare.",
            "Use a sharp clean knife to slice fish across the grain.",
            "Arrange slices neatly on a chilled plate.",
            "Serve immediately with daikon, ginger, wasabi and soy sauce."
        ],
        nutrition: {
            calories: "334 kcal",
            protein: "22g",
            carbohydrates: "38g",
            fat: "29g",
            fiber: "8g",
            sodium: "584mg"
        },
        chefTips: [
            "Keep the presentation simple and serve very fresh.",
            "Buy fish specifically prepared and sold for raw consumption."
        ],
        extendedPrepTime: false
    },
    {
        recipeName: "Ramen",
        recipeDesc: "Japanese noodle soup with savory broth, egg and fresh toppings",
        recipeImage: "./imgs/recipe_23.jpg",
        rate: { stars: 4.9, reviews: 844 },
        classification: { level: "Intermediate", category: "Asian" },
        prepTime: "27 min",
        cookTime: "38 min",
        servings: "5 people",
        ingredients: [
            "2 portions ramen noodles",
            "4 cups chicken or vegetable broth",
            "2 tbsp soy sauce",
            "2 eggs",
            "100g mushrooms",
            "2 spring onions",
            "Nori sheets"
        ],
        instructions: [
            "Simmer broth with soy sauce and mushrooms.",
            "Boil eggs to your preferred softness and cool before peeling.",
            "Cook ramen noodles separately according to package directions.",
            "Divide noodles and broth into bowls; add eggs and toppings."
        ],
        nutrition: {
            calories: "351 kcal",
            protein: "25g",
            carbohydrates: "43g",
            fat: "31g",
            fiber: "9g",
            sodium: "621mg"
        },
        chefTips: [
            "Add chili oil or sesame seeds to taste.",
            "Cook noodles separately to keep the broth clear."
        ],
        extendedPrepTime: false
    },
    {
        recipeName: "Tortilla Soup",
        recipeDesc: "Mexican tomato and chili soup topped with crunchy tortilla strips",
        recipeImage: "./imgs/recipe_24.jpg",
        rate: { stars: 4.7, reviews: 917 },
        classification: { level: "Easy", category: "Mexican" },
        prepTime: "30 min",
        cookTime: "45 min",
        servings: "6 people",
        ingredients: [
            "1 onion, diced",
            "2 garlic cloves",
            "400g canned tomatoes",
            "4 cups chicken stock",
            "1 tsp cumin",
            "1 cup corn",
            "2 tortillas",
            "Avocado and cilantro"
        ],
        instructions: [
            "Sauté onion and garlic until soft.",
            "Add tomatoes, stock and cumin; simmer for 15 minutes.",
            "Stir in corn and blend part of the soup if desired.",
            "Fry tortilla strips until crisp and serve over the soup with toppings."
        ],
        nutrition: {
            calories: "368 kcal",
            protein: "28g",
            carbohydrates: "48g",
            fat: "33g",
            fiber: "2g",
            sodium: "658mg"
        },
        chefTips: [
            "Add avocado, lime and cilantro just before serving.",
            "Bake tortilla strips for a lighter topping."
        ],
        extendedPrepTime: true
    },
    {
        recipeName: "Lentil Soup",
        recipeDesc: "Comforting lentil soup with vegetables and warm spices",
        recipeImage: "./imgs/recipe_25.jpg",
        rate: { stars: 4.5, reviews: 990 },
        classification: { level: "Easy", category: "Middle Eastern" },
        prepTime: "33 min",
        cookTime: "52 min",
        servings: "2 people",
        ingredients: [
            "1 cup red lentils",
            "1 onion, diced",
            "1 carrot, diced",
            "1 tsp cumin",
            "5 cups vegetable stock",
            "1 tbsp olive oil",
            "Lemon wedges"
        ],
        instructions: [
            "Rinse lentils until the water runs clear.",
            "Sauté onion and carrot in olive oil until softened.",
            "Add lentils, cumin and stock; simmer until lentils break down.",
            "Blend partially for a creamy texture and season with lemon."
        ],
        nutrition: {
            calories: "385 kcal",
            protein: "31g",
            carbohydrates: "53g",
            fat: "10g",
            fiber: "3g",
            sodium: "695mg"
        },
        chefTips: [
            "Serve with toasted pita and fresh lemon.",
            "Stir occasionally to prevent lentils sticking to the pot."
        ],
        extendedPrepTime: false
    },
        {
        recipeName: "Grilled Salmon",
        recipeDesc: "Tender salmon fillets grilled with lemon, garlic and herbs",
        recipeImage: "./imgs/recipe_26.jpg",
        rate: { stars: 4.3, reviews: 143 },
        classification: { level: "Easy", category: "Seafood" },
        prepTime: "10 min",
        cookTime: "59 min",
        servings: "3 people",
        ingredients: [
            "4 salmon fillets",
            "1 tbsp olive oil",
            "1 lemon",
            "2 garlic cloves, minced",
            "1 tbsp chopped dill",
            "Salt and black pepper"
        ],
        instructions: [
            "Pat salmon dry and brush with olive oil.",
            "Season with garlic, salt, pepper and lemon zest.",
            "Grill skin-side down until nearly cooked, then turn briefly if needed.",
            "Rest for a few minutes and finish with lemon juice and dill."
        ],
        nutrition: {
            calories: "402 kcal",
            protein: "34g",
            carbohydrates: "58g",
            fat: "12g",
            fiber: "4g",
            sodium: "732mg"
        },
        chefTips: [
            "Pair with roasted vegetables or rice.",
            "Avoid overcooking; salmon stays moist when just opaque."
        ],
        extendedPrepTime: false
    },
    {
        recipeName: "Shrimp Scampi",
        recipeDesc: "Garlicky shrimp tossed with lemon butter and pasta",
        recipeImage: "./imgs/recipe_27.jpg",
        rate: { stars: 4.1, reviews: 216 },
        classification: { level: "Easy", category: "Seafood" },
        prepTime: "13 min",
        cookTime: "20 min",
        servings: "4 people",
        ingredients: [
            "300g shrimp, peeled",
            "250g linguine",
            "3 tbsp butter",
            "3 garlic cloves",
            "½ cup white wine or stock",
            "1 lemon",
            "Fresh parsley"
        ],
        instructions: [
            "Cook linguine until al dente and reserve pasta water.",
            "Melt butter and sauté garlic briefly.",
            "Add shrimp and cook until pink; add wine or stock and lemon.",
            "Toss with pasta, parsley and a splash of pasta water."
        ],
        nutrition: {
            calories: "419 kcal",
            protein: "37g",
            carbohydrates: "63g",
            fat: "14g",
            fiber: "5g",
            sodium: "769mg"
        },
        chefTips: [
            "Finish with chili flakes for gentle heat.",
            "Do not overcook shrimp; remove them as soon as they turn pink."
        ],
        extendedPrepTime: false
    },
    {
        recipeName: "Vegetable Curry",
        recipeDesc: "Hearty mixed vegetable curry simmered with coconut and spices",
        recipeImage: "./imgs/recipe_28.jpg",
        rate: { stars: 4.8, reviews: 289 },
        classification: { level: "Easy", category: "Asian" },
        prepTime: "16 min",
        cookTime: "27 min",
        servings: "5 people",
        ingredients: [
            "1 potato, cubed",
            "1 cup cauliflower florets",
            "1 carrot, sliced",
            "1 cup peas",
            "2 tbsp curry paste",
            "400ml coconut milk",
            "1 onion"
        ],
        instructions: [
            "Sauté onion with curry paste until fragrant.",
            "Add potato, carrot and cauliflower; stir to coat.",
            "Pour in coconut milk and simmer until vegetables are tender.",
            "Add peas near the end and season to taste."
        ],
        nutrition: {
            calories: "436 kcal",
            protein: "40g",
            carbohydrates: "22g",
            fat: "16g",
            fiber: "6g",
            sodium: "806mg"
        },
        chefTips: [
            "Serve with rice, naan or fresh cilantro.",
            "Cut vegetables to similar sizes for even cooking."
        ],
        extendedPrepTime: true
    },
    {
        recipeName: "Steak Fajitas",
        recipeDesc: "Sizzling beef strips with peppers and onions in warm tortillas",
        recipeImage: "./imgs/recipe_29.jpg",
        rate: { stars: 4.6, reviews: 362 },
        classification: { level: "Easy", category: "Mexican" },
        prepTime: "19 min",
        cookTime: "34 min",
        servings: "6 people",
        ingredients: [
            "400g beef steak, thinly sliced",
            "2 bell peppers, sliced",
            "1 onion, sliced",
            "1 tbsp fajita seasoning",
            "1 tbsp oil",
            "8 small tortillas",
            "Lime"
        ],
        instructions: [
            "Season beef strips with fajita seasoning.",
            "Sear beef quickly in a hot skillet and set aside.",
            "Cook peppers and onion until lightly charred but still crisp.",
            "Return beef to the pan and serve in warm tortillas with lime."
        ],
        nutrition: {
            calories: "453 kcal",
            protein: "43g",
            carbohydrates: "27g",
            fat: "18g",
            fiber: "7g",
            sodium: "843mg"
        },
        chefTips: [
            "Add guacamole, salsa and sour cream.",
            "Slice beef against the grain for tenderness."
        ],
        extendedPrepTime: false
    },
    {
        recipeName: "Pasta Pesto",
        recipeDesc: "Pasta coated in fragrant basil pesto with Parmesan",
        recipeImage: "./imgs/recipe_30.jpg",
        rate: { stars: 4.4, reviews: 435 },
        classification: { level: "Easy", category: "Italian" },
        prepTime: "22 min",
        cookTime: "41 min",
        servings: "2 people",
        ingredients: [
            "300g pasta",
            "½ cup basil pesto",
            "¼ cup Parmesan",
            "2 tbsp pine nuts",
            "1 cup cherry tomatoes",
            "1 tbsp olive oil"
        ],
        instructions: [
            "Cook pasta in salted water until al dente.",
            "Toast pine nuts in a dry pan until fragrant.",
            "Toss warm pasta with pesto and a little pasta water.",
            "Add tomatoes, Parmesan and pine nuts before serving."
        ],
        nutrition: {
            calories: "470 kcal",
            protein: "46g",
            carbohydrates: "32g",
            fat: "20g",
            fiber: "8g",
            sodium: "880mg"
        },
        chefTips: [
            "Add grilled chicken or roasted vegetables if desired.",
            "Do not cook pesto over high heat; toss it with warm pasta."
        ],
        extendedPrepTime: false
    },
    {
        recipeName: "Chili con Carne",
        recipeDesc: "Rich Mexican-inspired beef and bean chili with warming spices",
        recipeImage: "./imgs/recipe_31.jpg",
        rate: { stars: 4.2, reviews: 508 },
        classification: { level: "Intermediate", category: "Mexican" },
        prepTime: "25 min",
        cookTime: "48 min",
        servings: "3 people",
        ingredients: [
            "500g ground beef",
            "1 onion, diced",
            "2 garlic cloves",
            "400g canned tomatoes",
            "1 can kidney beans",
            "1 tbsp chili powder",
            "1 tsp cumin"
        ],
        instructions: [
            "Brown ground beef in a heavy pot.",
            "Add onion and garlic and cook until softened.",
            "Stir in tomatoes, beans and spices.",
            "Simmer gently until thick and flavorful, stirring occasionally."
        ],
        nutrition: {
            calories: "487 kcal",
            protein: "18g",
            carbohydrates: "37g",
            fat: "22g",
            fiber: "9g",
            sodium: "917mg"
        },
        chefTips: [
            "Serve with rice, sour cream and cilantro.",
            "Make it ahead; the flavor improves after resting."
        ],
        extendedPrepTime: false
    },
    {
        recipeName: "Moussaka",
        recipeDesc: "Baked layers of eggplant, spiced meat sauce and béchamel",
        recipeImage: "./imgs/recipe_32.jpg",
        rate: { stars: 4.9, reviews: 581 },
        classification: { level: "Hard", category: "Mediterranean" },
        prepTime: "28 min",
        cookTime: "55 min",
        servings: "4 people",
        ingredients: [
            "2 eggplants, sliced",
            "400g ground lamb or beef",
            "1 onion",
            "400g tomato passata",
            "1 tsp cinnamon",
            "2 cups béchamel",
            "½ cup grated cheese"
        ],
        instructions: [
            "Salt eggplant slices briefly, pat dry and roast until tender.",
            "Cook onion and meat; add tomato and cinnamon and simmer.",
            "Layer eggplant and meat sauce in a baking dish.",
            "Cover with béchamel and cheese; bake until golden and set."
        ],
        nutrition: {
            calories: "504 kcal",
            protein: "21g",
            carbohydrates: "42g",
            fat: "24g",
            fiber: "2g",
            sodium: "954mg"
        },
        chefTips: [
            "Rest before serving and pair with a Greek salad.",
            "Roasting the eggplant first keeps the bake from becoming watery."
        ],
        extendedPrepTime: true
    },
    {
        recipeName: "Thai Red Curry",
        recipeDesc: "Spicy Thai coconut curry with vegetables and fragrant basil",
        recipeImage: "./imgs/recipe_33.jpg",
        rate: { stars: 4.7, reviews: 654 },
        classification: { level: "Intermediate", category: "Asian" },
        prepTime: "31 min",
        cookTime: "16 min",
        servings: "5 people",
        ingredients: [
            "2 tbsp red curry paste",
            "400ml coconut milk",
            "300g chicken or tofu",
            "1 red bell pepper",
            "1 cup bamboo shoots",
            "100g green beans",
            "Thai basil"
        ],
        instructions: [
            "Heat curry paste in a saucepan until fragrant.",
            "Add coconut milk and stir until smooth.",
            "Add chicken or tofu and simmer until cooked.",
            "Add vegetables and cook until tender; finish with basil."
        ],
        nutrition: {
            calories: "521 kcal",
            protein: "24g",
            carbohydrates: "47g",
            fat: "26g",
            fiber: "3g",
            sodium: "991mg"
        },
        chefTips: [
            "Serve with jasmine rice and lime wedges.",
            "Adjust the curry paste to control the heat."
        ],
        extendedPrepTime: false
    },
    {
        recipeName: "Couscous",
        recipeDesc: "Fluffy North African couscous with vegetables and herbs",
        recipeImage: "./imgs/recipe_34.jpg",
        rate: { stars: 4.5, reviews: 727 },
        classification: { level: "Easy", category: "African" },
        prepTime: "34 min",
        cookTime: "23 min",
        servings: "6 people",
        ingredients: [
            "1½ cups couscous",
            "1½ cups vegetable stock",
            "1 carrot, diced",
            "1 zucchini, diced",
            "½ cup chickpeas",
            "2 tbsp olive oil",
            "Fresh parsley"
        ],
        instructions: [
            "Bring vegetable stock to a boil.",
            "Pour stock over couscous, cover and leave for 5 minutes.",
            "Fluff with a fork while adding olive oil.",
            "Fold in cooked vegetables, chickpeas and parsley."
        ],
        nutrition: {
            calories: "538 kcal",
            protein: "27g",
            carbohydrates: "52g",
            fat: "28g",
            fiber: "4g",
            sodium: "1028mg"
        },
        chefTips: [
            "Add toasted almonds and raisins for texture.",
            "Fluff gently with a fork to keep the grains separate."
        ],
        extendedPrepTime: false
    },
    {
        recipeName: "Beef Tacos",
        recipeDesc: "Seasoned beef tacos with salsa, avocado and crunchy toppings",
        recipeImage: "./imgs/recipe_35.jpg",
        rate: { stars: 4.3, reviews: 800 },
        classification: { level: "Easy", category: "Mexican" },
        prepTime: "11 min",
        cookTime: "30 min",
        servings: "2 people",
        ingredients: [
            "500g ground beef",
            "8 taco shells",
            "1 tbsp cumin and paprika",
            "1 cup shredded lettuce",
            "1 tomato, diced",
            "1 avocado",
            "½ cup grated cheese"
        ],
        instructions: [
            "Brown beef in a skillet and drain excess fat.",
            "Add cumin, paprika, salt and a splash of water.",
            "Warm taco shells according to package directions.",
            "Fill shells with beef, lettuce, tomato, avocado and cheese."
        ],
        nutrition: {
            calories: "555 kcal",
            protein: "30g",
            carbohydrates: "57g",
            fat: "30g",
            fiber: "5g",
            sodium: "1065mg"
        },
        chefTips: [
            "Serve with fresh lime and your favorite salsa.",
            "Keep toppings chilled and assemble just before serving."
        ],
        extendedPrepTime: false
    },
    {
        recipeName: "Moroccan Tagine",
        recipeDesc: "Slow-cooked Moroccan stew with warming spices and vegetables",
        recipeImage: "./imgs/recipe_36.jpg",
        rate: { stars: 4.1, reviews: 873 },
        classification: { level: "Intermediate", category: "African" },
        prepTime: "14 min",
        cookTime: "37 min",
        servings: "3 people",
        ingredients: [
            "500g chicken or lamb",
            "1 onion, sliced",
            "2 carrots, chopped",
            "1 can chickpeas",
            "1 tsp cumin",
            "1 tsp paprika",
            "½ tsp cinnamon",
            "2 cups stock"
        ],
        instructions: [
            "Brown the meat with a little oil in a heavy pot.",
            "Add onion and spices and cook until fragrant.",
            "Add vegetables, chickpeas and stock.",
            "Cover and simmer gently until the meat is tender."
        ],
        nutrition: {
            calories: "572 kcal",
            protein: "33g",
            carbohydrates: "62g",
            fat: "32g",
            fiber: "6g",
            sodium: "452mg"
        },
        chefTips: [
            "Finish with cilantro and serve with couscous.",
            "Cook slowly so the spices infuse the sauce."
        ],
        extendedPrepTime: true
    },
    {
        recipeName: "Baked Ziti",
        recipeDesc: "Oven-baked pasta with tomato sauce, ricotta and melted cheese",
        recipeImage: "./imgs/recipe_37.jpg",
        rate: { stars: 4.8, reviews: 946 },
        classification: { level: "Easy", category: "Italian" },
        prepTime: "17 min",
        cookTime: "44 min",
        servings: "4 people",
        ingredients: [
            "300g ziti or penne",
            "2 cups tomato sauce",
            "1 cup ricotta",
            "1½ cups mozzarella",
            "¼ cup Parmesan",
            "1 tsp dried oregano"
        ],
        instructions: [
            "Cook pasta until just under al dente and drain.",
            "Mix pasta with tomato sauce and oregano.",
            "Layer pasta with ricotta and mozzarella in a baking dish.",
            "Top with Parmesan and bake until bubbling and golden."
        ],
        nutrition: {
            calories: "589 kcal",
            protein: "36g",
            carbohydrates: "21g",
            fat: "34g",
            fiber: "7g",
            sodium: "489mg"
        },
        chefTips: [
            "Serve with garlic bread and a green salad.",
            "Slightly undercook the pasta before baking."
        ],
        extendedPrepTime: false
    },
    {
        recipeName: "Greek Gyros",
        recipeDesc: "Greek-style pita wraps with seasoned meat, tomato and tzatziki",
        recipeImage: "./imgs/recipe_38.jpg",
        rate: { stars: 4.6, reviews: 99 },
        classification: { level: "Intermediate", category: "Mediterranean" },
        prepTime: "20 min",
        cookTime: "51 min",
        servings: "5 people",
        ingredients: [
            "500g chicken or pork strips",
            "2 tbsp olive oil",
            "1 tbsp oregano",
            "1 lemon",
            "4 pita breads",
            "1 tomato",
            "½ cucumber",
            "½ cup tzatziki"
        ],
        instructions: [
            "Marinate meat with olive oil, oregano and lemon.",
            "Cook in a hot pan or grill until browned and cooked through.",
            "Warm pita breads and prepare sliced vegetables.",
            "Fill pita with meat, tomato, cucumber and tzatziki."
        ],
        nutrition: {
            calories: "606 kcal",
            protein: "39g",
            carbohydrates: "26g",
            fat: "11g",
            fiber: "8g",
            sodium: "526mg"
        },
        chefTips: [
            "Add red onion and fries inside the wrap.",
            "Let the meat rest briefly before slicing."
        ],
        extendedPrepTime: false
    },
    {
        recipeName: "Paella",
        recipeDesc: "Spanish rice dish with saffron, seafood and colorful vegetables",
        recipeImage: "./imgs/recipe_39.jpg",
        rate: { stars: 4.4, reviews: 172 },
        classification: { level: "Hard", category: "European" },
        prepTime: "23 min",
        cookTime: "58 min",
        servings: "6 people",
        ingredients: [
            "1½ cups short-grain rice",
            "250g shrimp",
            "200g mussels",
            "1 bell pepper",
            "1 tomato, grated",
            "3 cups seafood stock",
            "Pinch of saffron",
            "Peas"
        ],
        instructions: [
            "Sauté pepper and tomato in a wide shallow pan.",
            "Stir in rice and saffron, then add hot seafood stock.",
            "Arrange seafood and peas over the rice.",
            "Cook without stirring until rice is tender and a crust forms underneath."
        ],
        nutrition: {
            calories: "623 kcal",
            protein: "42g",
            carbohydrates: "31g",
            fat: "13g",
            fiber: "9g",
            sodium: "563mg"
        },
        chefTips: [
            "Garnish with lemon wedges and parsley.",
            "Use a wide pan and avoid stirring after adding the stock."
        ],
        extendedPrepTime: false
    },
    {
        recipeName: "Gazpacho",
        recipeDesc: "Refreshing chilled Spanish tomato soup with cucumber and pepper",
        recipeImage: "./imgs/recipe_40.jpg",
        rate: { stars: 4.2, reviews: 245 },
        classification: { level: "Easy", category: "European" },
        prepTime: "26 min",
        cookTime: "19 min",
        servings: "2 people",
        ingredients: [
            "5 ripe tomatoes",
            "½ cucumber",
            "½ red bell pepper",
            "¼ red onion",
            "2 tbsp olive oil",
            "1 tbsp sherry vinegar",
            "1 slice bread"
        ],
        instructions: [
            "Roughly chop tomatoes, cucumber, pepper and onion.",
            "Blend vegetables with bread, olive oil and vinegar until smooth.",
            "Season and chill for at least one hour.",
            "Stir, adjust seasoning and serve cold."
        ],
        nutrition: {
            calories: "640 kcal",
            protein: "45g",
            carbohydrates: "36g",
            fat: "15g",
            fiber: "2g",
            sodium: "600mg"
        },
        chefTips: [
            "Top with diced cucumber, pepper and a drizzle of olive oil.",
            "Use ripe tomatoes and chill thoroughly before serving."
        ],
        extendedPrepTime: true
    }
];



// ----------- Read functions ------------- // 

function XXdisplayRecipe() {
    var addBtn = document.getElementById("try-another-btn");
    var container = document.getElementById("recipe-display-section");

    addBtn.addEventListener("click", function () {

    // 1. Create a new paragraph
    var newElement = document.createElement("div");

    // 2. Add text to it
    newElement.innerHTML = 
   ``
    ;

    // 3. Add a class
    newElement.classList.add("recipe-layout");

    // 4. Append it to the section container
    container.appendChild(newElement);
        console.log("Button clicked !");
        
    });
}


// Variable to save the previous meal, to avoid duplicated meal
let previousMealIndex;

function getRandomMeal() {
    let randomIndex; 


  do {  randomIndex = Math.floor(
            Math.random() * recipesData.length);
       }
    while (randomIndex === previousMealIndex);

    previousMealIndex = randomIndex;

    return recipesData[randomIndex];

    //Test
    // console.log(randomIndex);
    // console.log(recipesData[randomIndex]);
}

    // Takes the recipe Object returned by Get Random Meal 
function displayMeal(recipe){
    // Test
    // console.log(recipe);

    // [1] Image , Name , Desc 
    document.getElementById("recipe-image").src = recipe.recipeImage; 
    document.getElementById("recipe-name").textContent = recipe.recipeName; 
    document.getElementById("recipe-description").textContent = recipe.recipeDesc; 
    
    // [2] Ingredients 
    document.getElementById("ingredients-list").innerHTML = loopIngredients(recipe.ingredients); 
    
    // [3] Instructions
    document.getElementById("instructions-list").innerHTML = loopInstructions(recipe.instructions);
    
    //[4] Nutritions 
    // document.getElementById("nutritions-row").querySelector("span");
    loopNutritions(recipe);
    
    //[5] Chef Tips
    document.getElementById("tips-list").innerHTML = loopTips(recipe.chefTips);

    //[6] Other numbers: stats, reviews and Basges 
    document.getElementById("rating-average").textContent = recipe.rate.stars;
    document.getElementById("rating-quantity").textContent = recipe.rate.reviews;

    document.getElementById("prep-time-display").textContent = recipe.prepTime;
    document.getElementById("cook-time-display").textContent = recipe.cookTime;
    document.getElementById("servings-display").textContent = recipe.servings;

    //Badges 
    document.getElementById("difficulty-badge").textContent = recipe.classification.level;
    document.getElementById("category-badge").textContent = recipe.classification.category;

   
    // Controlling Extended Preparation Time
    if(recipe.extendedPrepTime) {
        document.getElementById("time-warning").classList.toggle("d-none");

        //test
        // console.log(document.getElementById("time-warning"));
    }


}

// [2] Ingredients
function loopIngredients(input_items) {
    var input_items_length = input_items.length;
    var result = "";

    for(var i=0 ; i < input_items_length; i++) {
        result += 
        `
        <li class="mb-2">
            <div class="me-2 ingredients-numbers fs-6 mb-2">${(i+1)}</div>
            
            <span class="text-muted fs-6 ms-3"> ${input_items[i]} </span>
        </li>
        ` ;
    }
    //test 
    // console.log(result);

    // Returns a set of <li> Elements, can be used as innerHTML 
    return result; 

}

// [3] Instructions
function loopInstructions(input_items) {
    var input_items_length = input_items.length;
    var result = "";

    for(var i=0 ; i < input_items_length; i++) {
        result += 
        `
        <li class="mb-1 list-unstyled d-flex align-items-center justify-content-start">

            <div class="me-2 instruction-number fs-6 mb-2">${(i+1)}</div>
            
            <span class="text-muted fs-6 ms-3"> ${input_items[i]} </span>
            
        </li>
        `
    }
    //test 
    // console.log(result);

    // Returns a set of <li> Elements, can be used as innerHTML for <ol> Instructions 
    return result; 

}

function loopNutritions(nutritionObj) {

    // IDs of my <span> elements
    let nutritionItems = {
        calories: "calories-value",
        protein: "protein-value",
        carbohydrates: "carbs-value",
        fat: "fat-value",
        fiber: "fiber-value",
        sodium: "sodium-value"
};
    //loop through spans 
    for (let key in nutritionItems) {

        // Give the span with ID xyz = the real value of the object passed
        document.getElementById(nutritionItems[key]).textContent =
            nutritionObj.nutrition[key];

            console.log(`${nutritionItems[key]} : ${nutritionObj.nutrition[key]}`);

    }
}

//[5] Tips function 
function loopTips(input_items) {
    var result = "" ; 

    for(var i = 0; i < input_items.length; i++) {
        result += `<li class="mb-3">
                        <i class="fa-solid fa-lightbulb text-warning me-2"></i>
                        ${input_items[i]}
                    </li>`
    }

    return result; 
}

function suggestMeal() {
        //Get a random meal object 
        const randomMeal = getRandomMeal();

        // Display the object in related html elements  
        displayMeal(randomMeal);

    // Test
    // console.log(getRandomMeal());
    // console.log(randomMeal);
}

    // Run on Button Try Another 
     document.getElementById("try-another-btn")
    .addEventListener("click", suggestMeal);

    //Run the first Recipe when first open the page 
    suggestMeal();