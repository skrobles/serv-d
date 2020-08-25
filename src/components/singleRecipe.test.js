import React from "react";
import enzyme, { shallow } from "enzyme";
import { SingleRecipe } from "./singleRecipe";
import Adapter from "enzyme-adapter-react-16";
import { render, fireEvent } from "@testing-library/react";
import { ExpansionPanelActions } from "@material-ui/core";

const adapter = new Adapter();
enzyme.configure({ adapter });

const appState = {
  singleRecipe: {
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnHm5WGV1Zc4gVI5XhIcoJb_Sfl24ygMJhTQ&usqp=CAU",
    title: "Spaghetti",
    servings: "Two",
    time: "20 minutes",
    ingredients: ["pasta", "tomato sauce", "parmesan cheese"],
    steps: ["cook the pasta"],
  },
  savedRecipes: [],
  user: {},
};

describe("Single Recipe", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(<SingleRecipe appState={appState} location={{}} />);
  });

  it("Renders without crashing", () => {
    shallow(<SingleRecipe appState={appState} location={{}} />);
  });

  it("Renders the recipe title", () => {
    const title = wrapper.getByText("Spaghetti");
    expect(title).toBeInTheDocument();
  });

  it("Renders the recipe servings", () => {
    const servings = wrapper.getByText(
      `Servings: ${appState.singleRecipe.servings}`
    );
    expect(servings).toBeInTheDocument();
  });

  it("Renders the recipe ingredients", () => {
    for (let el of appState.singleRecipe.ingredients) {
      const ingredient = wrapper.getByText(el);
      expect(ingredient).toBeInTheDocument();
    }
  });

  it("Renders the recipe steps", () => {
    const step = wrapper.getByText(appState.singleRecipe.steps[0]);
    expect(step).toBeInTheDocument();
  });
});

describe("Single Recipe for Logged in User", () => {
  let wrapper, save, remove;

  beforeEach(() => {
    appState.user = { id: 123 };
    save = jest.fn();
    remove = jest.fn();
    wrapper = render(
      <SingleRecipe appState={appState} location={{}} saveRecipe={save} />
    );
  });

  it("allows logged in users to save a recipe, if not already saved", () => {
    const saveButton = wrapper.container.querySelector(".MuiSvgIcon-root");
    fireEvent.click(saveButton);

    expect(save).toHaveBeenCalledTimes(1);
  });
});

// describe("Recipe Card", () => {
//   it("Renders without crashing", () => {
//     shallow(<RecipeCard recipe={recipe} />);
//   });

//   it("renders the recipe title", () => {
//     const { getByText } = render(<RecipeCard recipe={recipe} />);
//     const title = getByText("Spaghetti");
//     expect(title).toBeInTheDocument();
//   });

//   it("renders the recipe image", () => {
//     const { getByTitle } = render(<RecipeCard recipe={recipe} />);
//     const title = getByTitle("Spaghetti");
//     expect(title).toBeInTheDocument();
//   });

//   it("does not render save recipe button when user is logged out", () => {
//     const { getAllByRole } = render(<RecipeCard recipe={recipe} />);
//     const buttonCount = getAllByRole("button").length;

//     expect(buttonCount).toEqual(1);
//   });
// });

// describe("Recipe Card for logged in users", () => {
//   it("renders save recipe button when user is logged in", () => {
//     const { getAllByRole } = render(<RecipeCard recipe={recipe} user={user} />);
//     const buttonCount = getAllByRole("button").length;

//     expect(buttonCount).toEqual(2);
//   });

//   it("allows users to save recipes", () => {
//     const save = jest.fn();

//     const { getAllByRole } = render(
//       <RecipeCard recipe={recipe} user={user} saveRecipe={save} />
//     );
//     const saveButton = getAllByRole("button")[1];

//     fireEvent.click(saveButton);
//     expect(save).toHaveBeenCalledTimes(1);

//     // const { debug } = render(<RecipeCard recipe={recipe} user={user} saveRecipe={save}/>);
//     // debug()
//   });
// });
