import React from "react";
import { shallow } from "enzyme";
import LandingCard from "./LandingCard";

describe("LandingCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<LandingCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
