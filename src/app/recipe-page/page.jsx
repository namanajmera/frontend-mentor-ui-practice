const RecipePage = () => {
  return (
    <div className="flex justify-center items-center flex-col bg-[#FFFFFF] font-outfit xl:p-6 xl:rounded-3xl">
      {/* Image Container */}
      <img
        src="/recipe/image-omelette.jpeg"
        alt=""
        className="xl:rounded-2xl"
      />
      {/* Info Container */}

      <div className="p-6 space-y-10">
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-4xl">Simple Omelette Recipe</h1>
          <p className="text-sm">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
        </div>

        {/* Preparation Time */}
        <div className="space-y-4 p-5 bg-pink-100 rounded-md">
          <h1 className="text-2xl text-purple-800 font-semibold">
            Preparation time
          </h1>
          <ul className="flex flex-col justify-center space-y-2 list-disc px-6 marker:text-purple-800">
            <li className="space-x-2">
              <strong>Total:</strong>
              <span>Approximately 10 minutes</span>
            </li>
            <li className="space-x-2">
              <strong>Preparation:</strong>
              <span>5 minutes</span>
            </li>
            <li className="space-x-2">
              <strong>Cooking:</strong>
              <span>5 minutes</span>
            </li>
          </ul>
        </div>

        {/* Ingredients */}
        <div className="space-y-4">
          <h1 className="text-4xl text-red-500">Ingredients</h1>
          <ul className="flex flex-col justify-center space-y-2 list-disc px-6 marker:text-red-500">
            <li>
              <span>2-3 large eggs</span>
            </li>
            <li>
              <span>Salt, to taste</span>
            </li>
            <li>
              <span>Pepper, to taste</span>
            </li>
            <li>
              <span>1 tablespoon of butter or oil</span>
            </li>
            <li>
              <span>
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </span>
            </li>
          </ul>
        </div>

        <hr />

        {/* Instructions */}
        <div className="space-y-4">
          <h1 className="text-4xl text-red-500">Instructions</h1>
          <ol className="flex flex-col justify-center space-y-2 px-6 list-decimal marker:text-red-500">
            <li className="space-x-2 pl-4">
              <strong>Beat the eggs:</strong>
              <span>
                In a bowl, beat the eggs with a pinch of salt and pepper until
                they are well mixed. You can add a tablespoon of water or milk
                for a fluffier texture.
              </span>
            </li>
            <li className="space-x-2 pl-4">
              <strong>Heat the pan:</strong>
              <span>
                Place a non-stick frying pan over medium heat and add butter or
                oil.
              </span>
            </li>
            <li className="space-x-2 pl-4">
              <strong>Cook the omelette:</strong>
              <span>
                Once the butter is melted and bubbling, pour in the eggs. Tilt
                the pan to ensure the eggs evenly coat the surface.
              </span>
            </li>
            <li className="space-x-2 pl-4">
              <strong>Add fillings (optional):</strong>
              <span>
                When the eggs begin to set at the edges but are still slightly
                runny in the middle, sprinkle your chosen fillings over one half
                of the omelette.
              </span>
            </li>
            <li className="space-x-2 pl-4">
              <strong>Fold and serve:</strong>
              <span>
                As the omelette continues to cook, carefully lift one edge and
                fold it over the fillings. Let it cook for another minute, then
                slide it onto a plate.
              </span>
            </li>
            <li className="space-x-2 pl-4">
              <strong>Enjoy:</strong>
              <span>Serve hot, with additional salt and pepper if needed.</span>
            </li>
          </ol>
        </div>

        {/* Nutrition */}

        <div className="space-y-5">
          <h1 className="text-4xl text-red-500">Nutrition</h1>
          <p>
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <ul className="flex flex-col justify-center space-y-2 px-6">
            <li className="space-x-10 flex justify-between">
              <span>Calories</span>
              <strong className="text-red-500">277kcal</strong>
            </li>
            <hr />
            <li className="space-x-10 flex justify-between">
              <span>Carbs</span>
              <strong className="text-red-500">0g</strong>
            </li>
            <hr />
            <li className="space-x-10 flex justify-between">
              <span>Protein</span>
              <strong className="text-red-500">20g</strong>
            </li>
            <hr />
            <li className="space-x-10 flex justify-between">
              <span>Fat</span>
              <strong className="text-red-500">22g</strong>
            </li>
            <hr />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
