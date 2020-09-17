import React from "react";
import enzyme, { shallow } from "enzyme";
import { SignIn } from "../components/login";
import Adapter from "enzyme-adapter-react-16";
import { render, fireEvent } from "@testing-library/react";

const adapter = new Adapter();
enzyme.configure({ adapter });

describe("sign in", () => {
  let wrapper, setUser, history, user;

  beforeEach(() => {
    setUser = jest.fn();
    history = {
      location: {
        state: "/",
      },
    };
    user = {};
    wrapper = render(
      <SignIn setUser={setUser} history={history} user={user} />
    );
  });

  it("Renders without crashing", () => {
    shallow(<SignIn setUser={setUser} history={history} user={user} />);
  });
});
