import SignUpForm from "./components/SignUpForm";
import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import { Link } from "react-router-dom";

configure({ adapter: new Adapter() });

// describe('First React component test with Enzyme', () => {
//     it('renders without crashing', () => {
//        mount(<SignUpForm />);
//      });
//  });

it("renders correctly", () => {
  const tree = renderer
    .create(<Link page="http://www.instagram.com">Instagram</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
