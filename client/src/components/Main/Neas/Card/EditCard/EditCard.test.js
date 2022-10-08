import React from "react";
import { shallow } from "enzyme";
import EditCard from "./EditCard";

describe("EditCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<EditCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
