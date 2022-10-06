import React from "react";
import { shallow } from "enzyme";
import LandingsDetail from "./LandingsDetail";

describe("LandingsDetail", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<LandingsDetail />);
    expect(wrapper).toMatchSnapshot();
  });
});
