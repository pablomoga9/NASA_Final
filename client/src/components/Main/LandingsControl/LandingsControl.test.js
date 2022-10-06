import React from "react";
import { shallow } from "enzyme";
import LandingsControl from "./LandingsControl";

describe("LandingsControl", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<LandingsControl />);
    expect(wrapper).toMatchSnapshot();
  });
});
