import React from "react";
import enzyme, { shallow } from "enzyme";
import { RecipeCard } from "./RecipeCard";
import Adapter from "enzyme-adapter-react-16";
import { render, getByText } from "@testing-library/react";

const adapter = new Adapter();
enzyme.configure({ adapter });

const recipe = {
  imgUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnHm5WGV1Zc4gVI5XhIcoJb_Sfl24ygMJhTQ&usqp=CAU",
  title: "Spaghetti",
};

test("Renders without crashing", () => {
  shallow(<RecipeCard recipe={recipe} />);
});

test("renders the recipe title", () => {
  const { getByText } = render(<RecipeCard recipe={recipe} />);
  const title = getByText("Spaghetti");
  expect(title).toBeInTheDocument();
});

test("renders the recipe image", () => {
  // const { debug } = render(<RecipeCard recipe={recipe}/>);
  // debug()
  const { getByTitle } = render(<RecipeCard recipe={recipe} />);
  const title = getByTitle("Spaghetti");
  expect(title).toBeInTheDocument();
});
